import { configureStore } from '@reduxjs/toolkit'
import volumeReducer from './../features/volumeSlice'
import  Data from './../data/Data'

export const store = configureStore({
	reducer:{
		data: Data,
		volume: volumeReducer
	}
})