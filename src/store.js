import { configureStore } from "@reduxjs/toolkit";
import inputReducer from "./features/inputSlice"

export const store = configureStore({
    reducer:{
        input: inputReducer
    }
});

console.log(store.getState())