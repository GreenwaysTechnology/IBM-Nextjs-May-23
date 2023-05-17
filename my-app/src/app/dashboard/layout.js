export default function DashboardLayout(props) {
    return <section>
            <nav>
                <a href="#">Settings</a>
            </nav>
            {props.children}
    </section>
}