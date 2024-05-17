'use client'
import React, {JSX, useState} from 'react';

interface Props {
    totalPages: number;
    onPageChange: Function;
}

export default function Pagination(props: Props): JSX.Element {
    const [currentPage, setCurrentPage] = useState(1);

    const totalPages: number = props.totalPages;

    const nextPage = () => {
        setCurrentPage((nextPage: number) => Math.min(nextPage + 1, totalPages));
        props.onPageChange(currentPage);
    };

    const prevPage = () => {
        setCurrentPage((prevPage: number) => Math.max(prevPage - 1, 1));
        props.onPageChange(currentPage);
    };

    const changePage = (page: number) => {
        setCurrentPage(page);
        props.onPageChange(page);
    };

    return (
        <div>
            <nav aria-label="Page navigation">
                <ul className="pagination justify-content-center flex-wrap">
                    <li
                        className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}
                        onClick={prevPage}
                    >
                        <span role="button" className="page-link shadow-none">Previous</span>
                    </li>
                    {
                        Array.from({length: totalPages}, (_, i: number) => (
                            <li
                                className={`page-item ${currentPage === i+1 ? 'active' : ''}`}
                                key={i+1}
                                onClick={() => changePage(i+1)}
                            >
                                <span className="page-link shadow-none" role="button">
                                    {i + 1}
                                </span>
                            </li>
                        ))
                    }
                    <li
                        className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}
                        onClick={nextPage}
                    >
                        <span role="button" className="page-link shadow-none">Next</span>
                    </li>
                </ul>
            </nav>
        </div>
    );
};