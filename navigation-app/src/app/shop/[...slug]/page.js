
export default function Shop(props) {
    const nestedParams = props.params.slug
    return <div>
        <h1>Shop</h1>
        {nestedParams}
    </div>
}