'use client'
import React, {Dispatch, JSX, useState} from "react";
import styles from "@/app/page.module.css";
import { UserData } from "@/app/services/fetchGetUsers";
import Avatar from '@/app/components/avatar';
interface Props {
    user: UserData;
    modal: Dispatch<UserData>;
}
export default function Card(props: Props): JSX.Element {
    const dispatch = (user: UserData): any => {
         props.modal(user);
    }

    return  (
        <>
        <div className="col-sm-12 col-lg-4 mb-2">
            <div className={`card ${styles.card}`}>
                <div className="card-body">
                    <div className="mb-4">
                        <Avatar avatar={props.user.avatar} />
                        <h5 className={`card-title ${styles.cardTitle} d-inline-block text-start`}>
                            {props.user.firstname} {props.user.lastname}
                        </h5>
                    </div>
                    <p className={`card-text ${styles.cardText}`}>{props.user.description}</p>
                    <button
                        className="btn btn-primary"
                        data-bs-toggle="modal" data-bs-target="#staticBackdrop"
                        onClick={() => dispatch(props.user)}
                        >View More</button>
                </div>
            </div>
        </div>

        </>
    );
}