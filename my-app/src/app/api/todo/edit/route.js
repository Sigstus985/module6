export async function PUT(request)  {
	const res = await request.json()
    try {
        console.log(res)
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