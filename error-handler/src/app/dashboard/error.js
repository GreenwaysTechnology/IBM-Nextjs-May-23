
'use client'; //Error Component must be client component

export default function Error(props) {
    console.log(props)
    return <div>
        <h2>Error Page</h2>
        <h3>{props.error.message}</h3>
        <button onClick={() => {
            props.reset()
        }}>Reset</button>
    </div>
}