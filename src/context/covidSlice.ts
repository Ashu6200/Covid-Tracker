import { createSlice } from '@reduxjs/toolkit'
import { CovidDataType, GraphType, WorldCovidData } from '../assets'

interface CounterState {
    worldData: WorldCovidData | null;
    countryData: CovidDataType[];
    historyData: GraphType | null;
}

const initialState: CounterState = {
    worldData: null,
    countryData: [],
    historyData: null
}

export const counterSlice = createSlice({
    name: 'covidData',
    initialState,
    reducers: {
        getWorldData: (state, action) => {
            state.worldData = action.payload
        },
        getCountryData: (state, action) => {
            state.countryData = action.payload
        },
        getHistoryData: (state, action) => {
            state.historyData = action.payload
        }
    },
})

export const { getWorldData, getHistoryData, getCountryData } = counterSlice.actions
export default counterSlice.reducer