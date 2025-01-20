
export async function GET(request) {
    return Response.json({
        message: "Hello from route handler"
    }, {
        status: 200
    })
}