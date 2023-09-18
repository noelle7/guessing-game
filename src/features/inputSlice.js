import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: ""
}

const inputSlice = createSlice({
    name: "input",
    initialState,
    reducers:{
        setInputValue: (state, action) => {
            state.value = action.payload;
        }
    }
})
console.log(inputSlice)
export const {setInputValue} = inputSlice.actions
export default inputSlice.reducer