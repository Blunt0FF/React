import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { jwtDecode } from 'jwt-decode';

const URL = 'http://someurl.com';

export const register = createAsyncThunk(
  'auth/register',
  async (userData) => {
    try {
      const response = await axios.post(URL + '/register', userData)
      return response.data;
    } catch (err) {
      console.error(err)
    }
  }
)

export const login = createAsyncThunk(
  'auth/login',
  async (userData) => {
    try {
      const response = await axios.post(URL + '/login', userData);
      return response.data;
    } catch (err) {
      console.error(err);
    }
  }
)

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    token: null,
    status: 'idle',
    error: null
  },
  reducers: {
    logout: (state) => {
      state.token = null;
      state.user = null;
      state.status = 'idle',
      state.error = null;
      localStorage.removeItem('token');
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(register.fulfilled, (state, action) => {
        state.status = 'success'
      })
      .addCase(register.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.payload.message
      })
      .addCase(login.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(login.fulfilled, (state, action) => {
        state.status = 'success';
        state.token = action.payload.token;
        state.user = jwtDecode(action.payload.token);
        localStorage.setItem('token', action.payload.token);
      })
      .addCase(login.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload.message;
      })
  },
})

export const { logout } = authSlice.actions
export default authSlice.reducer