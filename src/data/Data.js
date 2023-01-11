import { createSlice } from "@reduxjs/toolkit";
import { useState } from "react";

const initialState = {
	text: "Some Text"
}

export const data = createSlice({
	name: 'data',
	initialState,
	reducers:{
		changeText: (state, text) => {
			state.text = text
		}
	}
})

export const { changeText } = data.actions;

export default data.reducer;