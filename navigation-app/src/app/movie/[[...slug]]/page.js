export default function MoviePage(props) {
    const value = props.params
    return <div>
        <h1>Movie Page {JSON.stringify(value)}</h1>
    </div>
}