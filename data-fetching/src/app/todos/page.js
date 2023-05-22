import { Suspense } from "react"

//function to get data
async function getTodos() {
    const url = `https://jsonplaceholder.typicode.com/todos`
    const res = await fetch(url)
    if (!res.ok) {
        throw new Error('data is not available')
    }
    return res.json()
}
function Loading() {
    // You can add any UI inside Loading, including a Skeleton.
    return <h2>🌀 Loading...</h2>;
}
export default async function TodosPage() {
    const todos = await getTodos()
    return <div>
        <h1>Todos Page</h1>
        {/* enables streaming */}
        <Suspense fallback={<Loading/>}>
            <ul>
                {todos.map(todo => {
                    return <li>{todo.title}</li>
                })}
            </ul>
        </Suspense>
    </div>
}