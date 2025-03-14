import { configureStore } from "@reduxjs/toolkit";
import dogsReducer from "./slice";

const store = configureStore({
    reducer: {dogs: dogsReducer}
});

export default store;