import { configureStore } from '@reduxjs/toolkit'
import volumeReducer from './../features/volumeSlice'
import activeValueSlice from './../features/activeValueSlice';
import bankModeSlice from '../features/bankModeSlice';

export const store = configureStore({
	reducer:{
		activeValue: activeValueSlice,
		volume: volumeReducer,
		bankMode: bankModeSlice
	}
})