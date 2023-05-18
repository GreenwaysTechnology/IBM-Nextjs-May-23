import ClientComponent from "./client";

import ExampleServerComponent from "./server-component";

export default function ClientPage() {
    return <>
        <h1>Server Page</h1>
        {/* <ClientComponent/> */}

        {/* Server Component passed as prop */}
        <ClientComponent>
            {/* Server Component passed as prop */}
            <ExampleServerComponent />
        </ClientComponent>
    </>
}