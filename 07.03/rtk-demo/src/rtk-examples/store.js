import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './slices/counterSlice';
import todoReducer from './slices/todoSlice';
import userReducer from './slices/userSlice';
import loadingReducer from './slices/loadingSlice';

const store = configureStore({
  reducer: {
    counter: counterReducer,
    todos: todoReducer,
    user: userReducer,
    loading: loadingReducer,
  }, // передаем reducer'ы
  middleware: (getDefaultMiddleware) => {
    // Добавляем middleware по умолчанию
    // (например, для обработки асинхронных операций)
    return getDefaultMiddleware();
  },
  devTools: process.env.NODE_ENV !== 'production', // Включаем devTools только в режиме разработки
  // enhancers: [] // Дополнительные улучшения нашего хранилища
});

export default store;


// dispatch action from UI => (middleware) => change state via reducer => update UI