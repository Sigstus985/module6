"use server";
import { getCollection } from "./databaseconnection";

export default async function getMovies() {
	try {
		const data = await getCollection("Premadenotes");
		console.log("Test");

		return data;
	} catch (err) {
		console.log(err);
	}
}
