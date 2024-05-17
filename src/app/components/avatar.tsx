'use client'
import React, {JSX} from "react";
import Image from "next/image";

interface Props {
    avatar: any;
}
export default function Avatar(props: Props): JSX.Element {
    return (
         props.avatar && (<Image
            src={props.avatar}
            width={50}
            height={50}
            loading = 'lazy'
            alt={'avatar'}
            className="d-inline-block"
        />)
    )
}