import { Box, Button, TextField, Typography, Alert } from '@mui/material';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login, resetState } from '../features/auth/authSlice';

export default function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );
  const [formData, setFormData] = useState({ email: '', password: '' });

  // Обработчик изменений полей ввода
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Обработчик отправки формы
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login({ email: formData.email, password: formData.password }));
  };

  // Сброс состояния при размонтировании компонента
  useEffect(() => {
    return () => {
      dispatch(resetState());
    };
  }, [dispatch]);

  // Перенаправление на страницу профиля после успешного входа
  useEffect(() => {
    if (isSuccess) {
      navigate('/profile');
    }
  }, [isSuccess, navigate]);

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 2,
        maxWidth: 400,
        margin: 'auto',
        padding: 4,
        border: '1px solid #ccc',
        borderRadius: 4,
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      }}
    >
      <Typography variant="h5" gutterBottom>
        Вход
      </Typography>

      {/* Форма входа */}
      <form
        onSubmit={handleSubmit}
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
          gap: 16,
        }}
      >
        {/* Поле email */}
        <TextField
          type="email"
          name="email"
          label="Email"
          value={formData.email}
          onChange={handleChange}
          required
          fullWidth
        />

        {/* Поле пароля */}
        <TextField
          type="password"
          name="password"
          label="Пароль"
          value={formData.password}
          onChange={handleChange}
          required
          fullWidth
        />

        {/* Кнопка входа */}
        <Button
          type="submit"
          variant="contained"
          color="primary"
          disabled={isLoading}
          fullWidth
        >
          {isLoading ? 'Загрузка...' : 'Войти'}
        </Button>
      </form>

      {/* Сообщение об ошибке */}
      {isError && (
        <Alert severity="error" sx={{ mt: 2 }}>
          {message || 'Произошла ошибка при входе'}
        </Alert>
      )}

      {/* Сообщение об успехе */}
      {isSuccess && (
        <Alert severity="success" sx={{ mt: 2 }}>
          Вход выполнен успешно!
        </Alert>
      )}
    </Box>
  );
}