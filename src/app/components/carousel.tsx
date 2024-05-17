'use client'
import React, {JSX, useState} from "react";
import styles from "@/app/page.module.css";
import Pagination from "@/app/components/pagination";
import Card from "@/app/components/card";
import { UserData } from "@/app/services/fetchGetUsers";
import Modal from "@/app/components/modal";

interface Props {
    userData: UserData[];
}
export default function Carousel(props: Props): JSX.Element {

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 25;

    const totalPages: number = Math.ceil(props.userData.length / itemsPerPage);
    const startIndex: number = (currentPage - 1) * itemsPerPage;
    const endIndex: number = startIndex + itemsPerPage;

    const currentItems: UserData[] = props.userData.slice(startIndex, endIndex);
    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    const [modalUser, setModalUser] = useState(currentItems[0])

    const handleModalClick = (users: UserData): any => {
        setModalUser(users);
    }

    return (
        <div className={`${styles.carouselContainer} container`}>
            <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
                <div className="carousel-inner container">
                    {
                        currentItems.map((users: any, i: number) => {
                            return (
                                <div className={`carousel-item  ${i === 0 ? 'active' : ''}`} key={i}>
                                    <div className="row">
                                        {
                                            users.map((user: any, j: any) => {
                                               return (
                                                    <Card
                                                        key={j}
                                                        user={user}
                                                        modal={() => handleModalClick(user)}
                                                    />
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <button className={`carousel-control-prev ${styles.width40}`} type="button"
                    data-bs-target="#carouselExampleFade"
                    data-bs-slide="prev">
                <span className="carousel-control-prev-icon bg-danger" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className={`carousel-control-next ${styles.width40}`} type="button"
                    data-bs-target="#carouselExampleFade"
                    data-bs-slide="next">
                <span className="carousel-control-next-icon bg-danger" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
            <Pagination totalPages={totalPages} onPageChange={handlePageChange}/>
            <Modal {...modalUser} />
        </div>
    )
}