import Alert from "./alert";
import Increment from "./increment";
import Timer from "./timer";

//Server component
export default function CounterPage(props){
    console.log('Counter page')
    return <div>
        <h1>Counter Page</h1>
        {/* Client side code would be part of server side code */}
        <Increment/>
        <Alert/>
        <Timer/>
    </div>
}