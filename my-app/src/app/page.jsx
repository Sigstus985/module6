"use client";

import { useEffect, useRef, useState } from "react";
import { getCollection } from "./hooks/mongodb/databaseconnection";
import getData from "./hooks/mongodb/getData";
import data from "./hooks/mongodb/getData";
import route from "./api/todo/create/route";

export default function Home() {
	const [buttonVis, setButtonVis] = useState(true);
	const [formVis, setFormVis] = useState(false);
	const [dataVis, setDataVis] = useState(true);
	const [showEdit, setShowEdit] = useState([]);
	const [showInput, setShowInput] = useState(false);
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

	const gatherData = async () => {
		const log = await getData();
		const dataFromApi = log.map((i) => i.title);

		console.log(dataFromApi);
		setTodoArray([...todoArray, ...dataFromApi]);
		console.log(todoArray);
		setDataVis(false);
	};

	const test = async (values) => {
		try {
			const response = await fetch("api/todo/create", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(values),
			});
			console.log(response.body);
		} catch (err) {
			console.log(err);
		}
	};

	const edit = async (noteTitle) => {
		const editTarget = todoArray.indexOf(noteTitle);

		setShowInput(true);
		setShowEdit(false);

		//document.getElementById(noteTitle).style.color = "red";
	};

	const confirm = (e) => {
		e.preventDefault()

		setShowEdit(true)
		setShowInput(false)

	};

	return (
		<div className="app">
			<h1>Note it</h1>
			<aside>
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
				{buttonVis && (
					<button className="bigBtn" onClick={handleClick}>
						Note!
					</button>
				)}
				{dataVis && (
					<button className="bigBtn" onClick={() => gatherData()}>
						Gather notes
					</button>
				)}
			</aside>

			<main className="notes">
				{todoArray.map((note) => (
					<div className="note" key={note}>
						<h2 id={note}>{note}</h2>{" "}
						{showInput && (
							<form onSubmit={(e) => confirm(e)}>
								<input type="text" />
								<button type="submit">Submit</button>
							</form>
						)}
						{showEdit && <button onClick={() => edit(note)}>Edit</button>}
					</div>
				))}
			</main>
			<div className="buttons">
				<button onClick={() => test("Hello")}>Test</button>
			</div>
		</div>
	);
}
