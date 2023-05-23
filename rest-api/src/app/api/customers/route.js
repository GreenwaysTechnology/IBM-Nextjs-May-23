import { NextResponse } from "next/server";

//rest api
//GET 
export  async function GET(request) {
    //send response
    return NextResponse.json({ message: 'CUSTOMERS GET' })
}
//POST 
export  async function POST(request) {
    const customer = await request.json()
    console.log(customer)
    //send response
    return NextResponse.json(customer)
}
//PUT
export  async function PUT(request) {
    //send response
    return NextResponse.json({ message: 'CUSTOMERS PUT' })
}
//DELETE REQUEST
export  async function DELETE(request) {
    //send response
    return NextResponse.json({ message: 'CUSTOMERS DELETE' })
}
