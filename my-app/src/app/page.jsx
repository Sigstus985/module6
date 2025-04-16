"use client";

import { useEffect, useState } from "react";
import { getCollection } from "./hooks/mongodb/databaseconnection";
import getData from "./hooks/mongodb/getData";
import data from "./hooks/mongodb/getData";
import route from "./api/todo/create/route";

export default function Home() {
	const [buttonVis, setButtonVis] = useState(true);
	const [formVis, setFormVis] = useState(false);
	const [formData, setFormData] = useState("");
	const [todoArray, setTodoArray] = useState([
		"Pick up the kids at school",
		"Get drain cleaner",
	]);

	const handleClick = () => {
		setButtonVis(false);
		setFormVis(true);
	};

	const handleChange = (e) => {
		setFormData(formData);
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		setButtonVis(true);
		setFormVis(false);

		const formData = new FormData(e.target);
		const payload = Object.fromEntries(formData);

		setTodoArray([...todoArray, payload.title]);
	};

	const test = async () => {
		const log = await getData();
    const dataFromApi = log.map((i) => i.title)

		console.log(dataFromApi);
		setTodoArray([...todoArray, ...dataFromApi]);
		console.log(todoArray);
	};

	const testAgain = async () => {
		console.log( await fetch("api/todo/create"))
	}

	return (
		<div>
			<h1>Note it</h1>
			<aside>
				{buttonVis && (
					<button className="noteBtn" onClick={handleClick}>
						Note!
					</button>
				)}
			</aside>
			{formVis && (
				<form className="noteForm" name="noteTitle" onSubmit={handleSubmit}>
					<input
						type="text"
						placeholder="Note title"
						name="title"
						onChange={handleChange}
					/>
					<button type="submit">Submit</button>
				</form>
			)}

			<main className="notes">
				{todoArray &&
					todoArray.map((note) => (
						<div className="note" key={note}>
							<h2>{note}</h2>
							<button>Edit</button>
						</div>
					))}
			</main>
			<button onClick={() => test()}>Test</button>
			<button onClick={() => testAgain()}>Test (again)</button>
		</div>
	);
}
