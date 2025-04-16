export async function POST(request)  {
	const res = await request.json();
    try {
        console.log(res)
        return new Response(JSON.stringify({
            message: "Success"
        }), {
            status: 200,
            headers: {'Content-Type': 'application/json'}
        })
    }
    catch (err) {
        console.log(err)
    }
}

 /*    export async function GET(request) {

    } */