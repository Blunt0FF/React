import { configureStore } from '@reduxjs/toolkit';
import { fruitReducer } from './fruitSlice';

const store = configureStore({
  reducer: {
    fruits: fruitReducer
  }
})

export default store;