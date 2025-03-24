import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';

const API_URL = 'http://localhost:3000/api/auth/';

export const register = createAsyncThunk(
  'auth/register',
  async (userData, { rejectWithValue }) => {
    try {
      const response = await axios.post(API_URL + 'register', userData);
      return response.data;
    } catch (err) {
      console.error('Ошибка при регистрации:', err.response?.data);

      // Поддержка как "msg", так и "message"
      const errorMessage = err.response?.data?.msg || err.response?.data?.message || 'Ошибка регистрации';
      return rejectWithValue({ message: errorMessage });
    }
  }
);

export const login = createAsyncThunk(
  'auth/login',
  async (userData, { rejectWithValue }) => {
    try {
      const response = await axios.post(API_URL + 'login', userData);
      return response.data;
    } catch (err) {
      console.error('Ошибка при входе:', err.response?.data);
      return rejectWithValue(err.response?.data || { message: 'Ошибка входа' });
    }
  }
);


// Функция для проверки срока действия токена
export const isTokenExpired = (token) => {
  if (!token) return true;
  const decoded = jwtDecode(token);
  return decoded.exp < Date.now() / 1000;
};

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    token: null,
    isLoading: false,
    isError: false,
    isSuccess: false,
    message: '',
  },
  reducers: {
    resetState: (state) => {
      state.isLoading = false;
      state.isError = false;
      state.isSuccess = false;
      state.message = '';
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
      localStorage.removeItem('token');
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(register.fulfilled, (state) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.message = 'Регистрация успешна!';
      })
      .addCase(register.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload?.message || 'Ошибка регистрации';
      })
      .addCase(login.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        if (!action.payload || !action.payload.token) {
          state.isLoading = false;
          state.isError = true;
          state.message = 'Ошибка входа: токен не получен';
          return;
        }

        state.isLoading = false;
        state.isSuccess = true;
        state.token = action.payload.token;
        state.user = jwtDecode(action.payload.token);
        localStorage.setItem('token', action.payload.token);
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload?.message || 'Ошибка входа';
      });
  },
});

export const { resetState, logout } = authSlice.actions;
export default authSlice.reducer;