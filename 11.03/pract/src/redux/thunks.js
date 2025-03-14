import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchDogs = createAsyncThunk('dogs/fetchDogs', async () => {
    const response = await axios.get('https://dogapi.dog/api/v2/breeds');
    return response.data.data;
})