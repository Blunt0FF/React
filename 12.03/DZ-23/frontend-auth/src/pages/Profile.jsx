import { Box, Button, Typography, Alert } from '@mui/material';
import { useEffect, useState } from 'react';
import { jwtDecode } from 'jwt-decode';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout } from '../features/auth/authSlice';

export default function Profile() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [tokenData, setTokenData] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setTokenData(jwtDecode(token)); // Декодируем токен при монтировании
    }
  }, []);

  const handleLogout = () => {
    dispatch(logout());
    navigate('/login');
  };

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
        Профиль пользователя
      </Typography>

      {/* Отображение ID пользователя */}
      <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
        Ваш ID: {tokenData ? tokenData.user.id : 'Не авторизован'}
      </Typography>

      {/* Кнопка выхода */}
      <Button
        variant="contained"
        color="secondary"
        onClick={handleLogout}
        fullWidth
      >
        Выйти
      </Button>

      {/* Сообщение об успешной авторизации или отсутствии токена */}
      {tokenData && (
        <Alert severity="success" sx={{ mt: 2 }}>
          Вы успешно авторизованы!
        </Alert>
      )}

      {!tokenData && (
        <Alert severity="warning" sx={{ mt: 2 }}>
          Пожалуйста, войдите в систему.
        </Alert>
      )}
    </Box>
  );
}