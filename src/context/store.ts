import { configureStore } from '@reduxjs/toolkit'
import covidReducer from './covidSlice'
import contactSlice from './contactSlice'

export const store = configureStore({
  reducer: {
    covid: covidReducer, 
    contact: contactSlice,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch