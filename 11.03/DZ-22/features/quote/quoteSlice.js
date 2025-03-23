import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Создание асинхронного thunk для получения случайной цитаты
export const fetchRandomQuote = createAsyncThunk('quote/fetchRandomQuote', async () => {
  const response = await axios.get('https://api.kanye.rest/');
  return response.data; // Возвращает объект с полем quote
});

const quoteSlice = createSlice({
  name: 'quote',
  initialState: {
    quote: null, // Цитата
    author: 'Kanye West', // Автор цитаты (всегда Канье Уэст)
    status: 'idle', // Статус загрузки
    error: null, // Ошибка
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRandomQuote.pending, (state) => {
        state.status = 'loading'; // Загрузка началась
      })
      .addCase(fetchRandomQuote.fulfilled, (state, action) => {
        state.status = 'succeeded'; // Загрузка завершена успешно
        state.quote = action.payload.quote; // Сохраняем цитату
      })
      .addCase(fetchRandomQuote.rejected, (state, action) => {
        state.status = 'failed'; // Загрузка завершилась с ошибкой
        state.error = action.error.message; // Сохраняем сообщение об ошибке
      });
  },
});

export default quoteSlice.reducer;