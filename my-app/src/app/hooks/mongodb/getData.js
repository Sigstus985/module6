"use server";
import { getCollection } from "./databaseconnection";

let data = {}

export default async function getData() {
	console.log("getData")
	try {
		const coll = await getCollection("Premadenotes")
		data = await coll.find({}).toArray()
		return JSON.parse(JSON.stringify(data))
	} catch (err) {
		console.log(err);
	}
	console.log(data)
}