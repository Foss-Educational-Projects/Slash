import { configureStore } from '@reduxjs/toolkit'

import  Data from './../data/Data'

export const store = configureStore({
	reducer:{
		data: Data
	}
})