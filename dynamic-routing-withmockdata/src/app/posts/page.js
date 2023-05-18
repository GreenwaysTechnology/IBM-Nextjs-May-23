import Link from 'next/link';
import posts from './post-mock'

export default function PostList() {
    return (
        <ul>
            {posts.map((post) => (
                <li key={post.id}>
                    <Link href={`/blog/${post.id}`}>{post.title}</Link>
                </li>
            ))}
        </ul>
    );
}