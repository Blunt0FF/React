import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../features/auth/authSlice'
import { checkTokenExpirationMiddleware } from './middlewares'

const store = configureStore({
  reducer: {
    auth: authReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(checkTokenExpirationMiddleware),
})

export default store
