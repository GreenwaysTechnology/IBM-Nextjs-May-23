'use client';

//old pattern
// import ExampleServerComponent from "./server-component";

// export default function ClientComponent() {

//     return <>
//         <button onClick={() => {
//             alert('Client Compoent')
//         }}>Client</button>
//         <ExampleServerComponent/>
//     </>
// }


//new pattern: server components are rendered inside client component as prop

export default function ClientComponent(props) {
    console.log(props)
    return <>
        <button onClick={() => {
            alert('Client Compoent')
        }}>Client</button>
        {/* <ExampleServerComponent /> */}
        {props.children}
    </>
}