export async function POST(request)  {
	const req = await request.json()
    try {
        console.log(req)
        return new Response(JSON.stringify({
            message: "Success"
        }), {
            status: 201,
            headers: {'Content-Type': 'application/json'}
        })
    }
    catch (err) {
        console.log(err)
    }
}