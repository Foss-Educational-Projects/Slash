import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	value: true
}

export const powerModeSlice = createSlice({
	name: "powerMode",
	initialState,
	reducers: {
		switchPowerMode: (state, action) => {
			state.value = action.payload;
		}
	}
})

export const { switchPowerMode } = powerModeSlice.actions;

export default powerModeSlice.reducer;