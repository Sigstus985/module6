"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { useState } from "react";

export default function Home() {
	const [formVis, setFormVis] = useState(false);

	const handleClick = () => {
		setFormVis(true);
	};
  
  const submitForm = () => {
    setFormVis(false)
  }

	return (
		<div>
			<h1>Note it</h1>
			<aside>
				<button className="noteBtn" onClick={handleClick}>
					Note!
				</button>
			</aside>
			{formVis && (
				<form className="noteForm">
					<input type="text" placeholder="Note title" />
          <button onClick={submitForm} >Submit</button>
				</form>
			)}

			<main className="notes"></main>
		</div>
	);
}
