import { createSlice } from '@reduxjs/toolkit';
import { fetchData } from './thunks';

const dataSlice = createSlice({
  name: 'data',
  initialState: {
    data: [],
    status: 'idle',
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        console.log(fetchData);
        state.status = 'loading';
        console.log("pending");
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.status = 'success';
        state.data = action.payload;
        console.log("success");
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  }
});

export default dataSlice.reducer;