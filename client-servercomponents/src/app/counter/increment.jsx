'use client';

import { useState } from "react"

export default function Increment() {
    const [count, setCount] = useState(10)
    return <>
        <h2>Increment : {count}</h2>
        <button onClick={() => setCount(count + 1)}>+</button>
    </>
}

//custom Hook -- useState,browser api,useEffect,listeners