//  'use client';

import { useState } from "react"

//client component
export default function Dislike() {
    const [count, setCount] = useState(10)
    return <>
        <h1>Dislike {count} </h1>
    </>
}