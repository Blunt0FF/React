import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  user: {
    id: null,
    name: '',
    email: '',
  }
}

export const fetchData = createAsyncThunk(
  'data/fetchData',   // имя action'а
  initialState,
  async (state, apiUrl) => {
    // Функция, которая будет вызвана при dispatch'е action'а
    const response = await axios.get(apiUrl); // Отправляем GET-запрос
    return response.data; // Возвращаем данные из ответа сервера
  }
)