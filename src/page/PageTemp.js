import React from "react";

export default function PageTemp({ name }) {
	const namePage = name ? name : "empty";

	return (
		<>
			<h1>page of {namePage} </h1>
			<p>description of {namePage} page </p>
		</>
	);
}
