import { createSlice, createSlice } from "@reduxjs/toolkit";

const initialState = {
	value: true
}

export const powerSlice = createSlice({
	name: "powerMode",
	initialState,
	reducers: {
		togglePower: (state, action) => {
			state.value = action.payload;
		}
	}
})

export const { togglePower } = powerSlice.actions;

export default powerSlice.reducer;