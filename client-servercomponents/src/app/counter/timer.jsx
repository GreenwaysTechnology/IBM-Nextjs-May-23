'use client';

import { useEffect } from "react";

//Client component
export default function Timer() {
    useEffect(() => {
        setTimeout(() => {
            console.log('this is delayed task')
        }, 1000)
    }, [])

    return <>
        <h1>Timer with UseEffect</h1>
    </>
}
