import React from "react";

const Note = (note) => {
	return (
		<div>
			<h2>{note}</h2>
			<button onClick={() => edit()}>Edit</button>
		</div>
	);
};

export default Note;
