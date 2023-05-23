import { NextResponse } from "next/server";

const url = `${process.env.JSON_PLACEHOLDER}/albums`

//rest api
export async function GET(request) {
    //use fetch api to talk to rest end points
    const res = await fetch(url)
    const albums = await res.json();
    //send response
    return NextResponse.json(albums)
}
export async function POST(request) {
    const album = await request.json()
    //post data to json place holder api
    const res = await fetch(url, {
        method: 'POST', headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(album)
    })
    //send response
    const newAlbum = await res.json();
    return NextResponse.json(newAlbum)
}

export async function PUT(request) {
    const { id, userId, title } = await request.json()
    console.log(id,userId,title)
    //console.log(ablumn)
    //post data to json place holder api
    const res = await fetch(`${url}/${id}`, {
        method: 'PUT', headers: {
            'Content-Type': 'application/json'
            , body: {
                id, userId, title
            }
        }
    })
    //send response
    const updatedAlbum = await res.json()
    return NextResponse.json(updatedAlbum)
}

export async function DELETE(request) {
    const {id} =  await request.json()
    console.log(id)
    //console.log(ablumn)
    // //post data to json place holder api
    //  await fetch(`${url}/${id}`, {
    //     method: 'DELETE', headers: {
    //         'Content-Type': 'application/json'
    //     }
    // })
    //send response
    return NextResponse.json({message:'deleted'})
}

// export async function DELETE(request) {
//     const ablumn = await request.json()
//     console.log(ablumn)
//     //console.log(ablumn)
//     // //post data to json place holder api
//     //  await fetch(`${url}/${id}`, {
//     //     method: 'DELETE', headers: {
//     //         'Content-Type': 'application/json'
//     //     }
//     // })
//     //send response
//     return NextResponse.json({message:'deleted'})
// }