'use client';

// function getData() {
//     return Promise.resolve('Hello Promise')
// }

// export default function PostPage() {
//     const result = use(getData())
//     return <div>
//         <h1>Post Page</h1>
//     </div>
// }

import useSWR from 'swr'

function fetcher(...args) {
    return fetch(...args).then(res => res.json())
}

export default function PostPage() {
    const url = 'https://jsonplaceholder.typicode.com/posts'
    const { data, error, isLoading } = useSWR(url, fetcher)
    if (error) {
        return <div><h1>Failed to return</h1></div>
    }
    if (isLoading) return <div>Loading....</div>
    return <div>
        {
            data.map(post => {
                return <h4>
                    {post.title}
                </h4>
            })
        }
    </div>
}