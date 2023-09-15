import { React, useState } from "react";

function Input() {
	const [name, setName] = useState("");
	return (
		<form>
			<label>
				Enter your Name:
				<input
					type="text"
					value={name}
					onChange={(e) => setName(e.target.value)}
				></input>
			</label>
		</form>
	);
}

export default Input;
