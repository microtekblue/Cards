import React, {JSX} from 'react';
import styles from "./page.module.css";
import { fetchGetUsers, UserData } from '@/app/services/fetchGetUsers';
import Carousel from "@/app/components/carousel";

export default async function Home(): Promise<JSX.Element> {

    const data: UserData[] = await fetchGetUsers();

    const groups: UserData[] =  data.reduce((r: any, e: UserData, i: any) =>
            (i % 3 ? r[r.length - 1].push(e) : r.push([e])) && r
        ,[]);

    return (
        <main className={styles.main}>
            <Carousel userData={groups} />
        </main>
    );
}