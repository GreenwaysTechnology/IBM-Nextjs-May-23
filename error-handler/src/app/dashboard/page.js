export default function DashboardPage(props) {
    //write biz logic to simulate error
    const isAdmin = false
    if (isAdmin) {
        return <>
            <h1>DashBoard Page</h1>
        </>
    } else {
        throw 'You are not Admin'
    }


}