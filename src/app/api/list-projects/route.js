const projects = require('@/project');
export async function GET(request) {

    const data = await projects

    return Response.json(data)
}