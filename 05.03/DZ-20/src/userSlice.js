// src/userSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  users: [
    { id: 1, name: 'Алексей', email: 'alexey@example.com' },
    { id: 2, name: 'Мария', email: 'maria@example.com' },
    { id: 3, name: 'Иван', email: 'ivan@example.com' },
  ],
};

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    addUser: (state, action) => {
      const newUser = {
        id: state.users.length + 1, // Генерация ID на основе длины массива
        ...action.payload,
      };
      state.users.push(newUser);
    },
    removeUser: (state, action) => {
      state.users = state.users.filter((user) => user.id !== action.payload);
    },
    editUser: (state, action) => {
      const { id, name, email } = action.payload;
      const userToEdit = state.users.find((user) => user.id === id);
      if (userToEdit) {
        userToEdit.name = name;
        userToEdit.email = email;
      }
    },
  },
});

export const { addUser, removeUser, editUser } = userSlice.actions;
export default userSlice.reducer;