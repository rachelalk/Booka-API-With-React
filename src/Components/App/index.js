import React from "react";
import "./App.css";
import Input from "./Input";
import { useState } from "react";
import Display from "../Display";
import Button from "../Button/Button";

function App() {



	const [authorName, setAuthorName] = useState("");
	const [bookTitle, setBookTitle] = useState("");
	const [authorSearch, setAuthorSearch] = useState("");
	const [message, setMessage] = useState("");

	function enterAuthor(event) {
		setAuthorName(event.target.value);
		setMessage(event.target.value);
		console.log(authorName);
	}

	function searchAuthor() {
		setAuthorSearch(authorName);
		setMessage("");
	}

	// function enterTitle(event) {
	// 	setBookTitle(event.target.value);
	// 	console.log(bookTitle);
	// }

	function clearSearch() {
		setAuthorName("");
		setAuthorSearch("");
	}

	return (
		<div className="App">
			<header className="App-header">
				<main className="main">
					<h1>Books!</h1>
					Find out information about an author:
					<Input
						value={message}
						placeholder={"Enter author name"}
						handleChange={enterAuthor}
						text={"📚Search"}
						onClick={searchAuthor}
					></Input>
					{/* Search by title:
				<Input
					placeholder={"Enter title"}
					handleChange={enterTitle}
					text={"📚Search"}
				></Input> */}
					<Display
						authorName={authorName}
						authorSearch={authorSearch}
					></Display>
				</main>
			</header>
		</div>
	);
}

export default App;
