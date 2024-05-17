'use client'
import { useEffect } from 'react';
export default function Bootstrap(): any {
    useEffect(() => {
        require('bootstrap/dist/js/bootstrap.bundle.min.js');
    }, []);

    return;
}