'use client';

import { useRouter } from "next/navigation";

export default function PhotoDetails() {
    const router = useRouter();
    return <>
        <h1>Photo Details</h1>
        <button onClick={() => {
            router.push('/posts')
        }}>Post</button>
    </>
}