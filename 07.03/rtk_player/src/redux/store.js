import { configureStore } from "@reduxjs/toolkit";
import tracksReducer from './slices/tracksSlice'
import playerReducer from './slices/playerSlice'
import settingsReducer from './slices/settingsSlice'

const store = configureStore({
    reducer: {
        tracks: tracksReducer,
        player: playerReducer,
        settings: settingsReducer 
    }
})

export default store