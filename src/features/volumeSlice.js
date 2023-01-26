import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	value: 50
}

export const volumeSlice = createSlice({
	name: "volume",
	initialState: initialState,
	reducers: {
		increase: (state, action) => {
			state.value = action.payload;
		}
	}
})
export const { increase } = volumeSlice.actions;
export default volumeSlice.reducer;