"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { useEffect, useState } from "react";

export default function Home() {
	const [buttonVis, setButtonVis] = useState(true);
	const [formVis, setFormVis] = useState(false);
	const [formData, setFormData] = useState("");
	const [todoArray, setTodoArray] = useState([
		"Pick up the kids at school", "Get drain cleaner"
	]);

	const handleClick = () => {
		setButtonVis(false);
		setFormVis(true);
	};

  const handleChange = (e) => {
    setFormData(formData)
  }

	const handleSubmit = (e) => {
		e.preventDefault();

		setButtonVis(true);
		setFormVis(false);

    const formData = new FormData(e.target)
    const payload = Object.fromEntries(formData)

    setTodoArray([...todoArray , payload.title])
	};

  useEffect(() => {
    console.log(todoArray)
  }, [handleSubmit])

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
				{todoArray.map((note) => (
					<div className="note" key={note}>
						<h2>{note}</h2>
					</div>
				))}
			</main>
		</div>
	);
}
