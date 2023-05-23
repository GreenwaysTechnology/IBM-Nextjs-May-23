import { NextResponse } from "next/server";

//rest api
export  async function GET(request) {
    //send response
    return NextResponse.json({ message: 'welcome to api' })
}