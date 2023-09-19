import React from "react";
import { useSelector, useDispatch } from 'react-redux';



function Gameinstruction() {
const name = useSelector((store)=>store.input.value)

return(
	<h1>{name}</h1>
)
}

export default Gameinstruction;
