import { jwtDecode } from 'jwt-decode';
import { logout } from './slices/authSlice';

export const tokenExpiredMiddleware = (state) => (next) => (action) => {
  const result = next(action);
  const token = store.getState().auth.token;

  if (token) {
    const decoded = jwtDecode(token)

    if (decoded.exp < Date.now() / 1000) {
      return dispatch(logout()) // dispatch(refreshToken())
    }
  }

  return result;
}