'use client'
import React, {JSX} from "react";
import { UserData } from "@/app/services/fetchGetUsers";
import Avatar from "@/app/components/avatar";
export default function Modal(props: UserData): JSX.Element {

    const joinDate: Date = new Date(props.join_date);

    return (
        <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1}
             aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <Avatar avatar={props.avatar} />
                        <h1 className="modal-title fs-5" id="staticBackdropLabel">{props.firstname} {props.lastname}</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <p><strong>Role:</strong> {props.role}</p>
                        <p><strong>Join Date:</strong> {joinDate.toDateString()}</p>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
    )
}