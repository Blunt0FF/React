import { configureStore } from "@reduxjs/toolkit";
import tracksReducer from "./slices/tracksSlice";
import settingsReducer from "./slices/settingsSlice";
import playerReducer from "./slices/playerSlice";

const store = configureStore({
    reducer: {
        tracks: tracksReducer,
        settings: settingsReducer,
        player: playerReducer,
    },