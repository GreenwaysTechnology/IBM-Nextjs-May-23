    import { NextResponse } from "next/server";

    //GET 
    export  async function GET(request) {
        //send response
        return NextResponse.json({ message: 'CUSTOMERS GET BY ID' })
    }