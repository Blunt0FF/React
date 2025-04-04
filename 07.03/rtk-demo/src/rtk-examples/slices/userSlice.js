import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: {
    id: null,
    name: '',
    email: '',
  }
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload
    },
    clearUser: (state) => {
      state.user = { id: null, name: '', email: '' }
    }
  }
})

export const { setUser, clearUser } = userSlice.actions
export default userSlice.reducer