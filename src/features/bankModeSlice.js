import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	value: false
}

export const bankModeSlice = createSlice({
	name:'bankMode',
	initialState,
	reducers: {
		switchBankMode:(state, action) => {
			state.value = action.payload;
		}
	}
})

export const { switchBankMode } = bankModeSlice.actions;
export default bankModeSlice.reducer;