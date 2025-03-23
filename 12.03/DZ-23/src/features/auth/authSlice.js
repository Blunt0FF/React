import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import { jwtDecode } from 'jwt-decode'

const API_URL = 'http://localhost:3000/api/auth/'

export const register = createAsyncThunk('auth/register', async userData => {
  try {
    // http://localhost:5000/api/auth/register
    const response = await axios.post(API_URL + 'register', userData)
    return response.data
  } catch (err) {
    console.error(err)
  }
})

export const login = createAsyncThunk('auth/login', async userData => {
  try {
    // http://localhost:5000/api/auth/login
    const response = await axios.post(API_URL + 'login', userData)
    return response.data
  } catch (err) {
    console.error(err)
  }
})

export const isTokenExpired = token => {
  if (!token) return true
  const decoded = jwtDecode(token)
  return decoded.exp < Date.now() / 1000
}

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
    resetState: state => {
      state.isLoading = false
      state.isError = false
      state.isSuccess = false
      state.message = ''
    },
    logout: state => {
      state.user = null
      state.token = null
      localStorage.removeItem('token')
    },
  },
  extraReducers: builder => {
    builder
      .addCase(register.pending, state => {
        state.isLoading = true
      })
      .addCase(register.fulfilled, state => {
        state.isLoading = false
        state.isSuccess = true
      })
      .addCase(register.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload.message
      })
      .addCase(login.pending, state => {
        state.isLoading = true
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.token = action.payload.token
        state.user = jwtDecode(action.payload.token)
        localStorage.setItem('token', action.payload.token)
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload.message
      })
  },
})

export const { resetState, logout } = authSlice.actions
export default authSlice.reducer
