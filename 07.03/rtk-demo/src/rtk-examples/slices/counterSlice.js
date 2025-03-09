import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter', // Имя слайса
  initialState: {
    value: 0
  }, // начальное состояние
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    }
  }
})

export default counterSlice.reducer;