import React from "react";
import Button from "../../Button/Button";

function Input({ handleChange, placeholder, text, onClick, value }) {
	return (
		<div>
			<input
				type="text"
				value={value}
				onChange={handleChange}
				placeholder={placeholder}
			></input>
			<Button onClick={onClick} text={text}></Button>
		</div>
	);
}

export default Input;
