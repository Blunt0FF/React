import { isTokenExpired, logout } from '../features/auth/authSlice'

export const checkTokenExpirationMiddleware = store => next => action => {
  const result = next(action)
  const token = store.getState().auth.token

  if (token && isTokenExpired(token)) {
    store.dispatch(logout())
  }

  return result
}

// store => action => middleware => reducer => UI
