import { Box, Button, TextField, Typography, Alert } from '@mui/material';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { register, resetState, logout } from '../features/auth/authSlice';
import { useState } from 'react';

export default function Register() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  });

  // Выполняем выход из системы при монтировании компонента
  useEffect(() => {
    dispatch(logout());
  }, [dispatch]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords don't match");
      return;
    }

    dispatch(register({ email: formData.email, password: formData.password }));
  };

  useEffect(() => {
    return () => {
      dispatch(resetState());
    };
  }, [dispatch]);

  useEffect(() => {
    if (isSuccess) {
      navigate('/login');
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
        Регистрация
      </Typography>

      {/* Форма регистрации */}
      <form
        onSubmit={handleSubmit}
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
          gap: 16,
        }}
      >
        <TextField
          type="email"
          name="email"
          label="Email"
          value={formData.email}
          onChange={handleChange}
          required
          fullWidth
        />
        <TextField
          type="password"
          name="password"
          label="Пароль"
          value={formData.password}
          onChange={handleChange}
          required
          fullWidth
        />
        <TextField
          type="password"
          name="confirmPassword"
          label="Подтвердите пароль"
          value={formData.confirmPassword}
          onChange={handleChange}
          required
          fullWidth
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          disabled={isLoading}
          fullWidth
        >
          {isLoading ? 'Загрузка...' : 'Зарегистрироваться'}
        </Button>
      </form>

      {/* Сообщение об ошибке */}
      {isError && (
        <Alert severity="error" sx={{ mt: 2 }}>
          {message || 'Произошла ошибка при регистрации'}
        </Alert>
      )}

      {/* Сообщение об успехе */}
      {isSuccess && (
        <Alert severity="success" sx={{ mt: 2 }}>
          Регистрация прошла успешно!
        </Alert>
      )}
    </Box>
  );
}