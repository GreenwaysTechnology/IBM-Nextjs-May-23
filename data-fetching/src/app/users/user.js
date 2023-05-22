'use client';

async function getUsers() {
    const url = `https://jsonplaceholder.typicode.com/users`
    const res = await fetch(url)
    if (!res.ok) {
        throw new Error('data is not available')
    }
    return res.json()
}
export default  async function User(){
    const users = await getUsers()
    console.log(users)
    return <div>
        <h1>User</h1>
        <div>
            {users.map(user=>{
                return <h2>{user.username}</h2>
            })}
        </div>
    </div>
}