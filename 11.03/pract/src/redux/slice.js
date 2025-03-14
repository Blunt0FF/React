import { createSlice } from "@reduxjs/toolkit";
import { fetchDogs } from "./thunks";

const initialState = { dogs: [], status: 'idle', error: null };

const dogsSlice = createSlice({ //Создание slice
    name: 'dogs',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchDogs.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchDogs.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.dogs = action.payload;
            })
            .addCase(fetchDogs.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
    }
    })

export default dogsSlice.reducer; //Экспорт reducer