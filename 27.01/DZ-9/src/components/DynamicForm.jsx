import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { TextField, Button, Box, Typography, Snackbar } from '@mui/material';

const DynamicForm = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm({
    mode: 'onChange',  // Валидация при изменении
  });
  const firstFieldValue = watch('firstField', '');
  const [openSnackbar, setOpenSnackbar] = useState(false);

  // Регулярное выражение для валидации email
  const emailRegex = /^[A-Za-z0-9._%+-]{3,}@([A-Za-z0-9.-]+\.[A-Za-z]{2,})$/;

  // Функция обработки отправки формы
  const onSubmit = (data) => {
    console.log("Form submitted successfully", data);
    setOpenSnackbar(true);  // Открываем Snackbar с сообщением
  };

  // Закрытие Snackbar
  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  return (
    <>
      <Box
        sx={{
          width: '300px',
          padding: '20px',
          boxShadow: 3,
          borderRadius: 2,
        }}
      >
        <Typography variant="h6" gutterBottom>Dynamic Form</Typography>

        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Первое поле ввода с валидацией для email */}
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            margin="normal"
            {...register('firstField', { 
              required: 'This field is required',
              pattern: {
                value: emailRegex,
                message: 'Email must have at least 3 characters before @ and a domain with a dot after it'
              }
            })}
            error={!!errors.firstField}
            helperText={errors.firstField?.message}
          />

          {/* Поле пароля, появляется только после успешной валидации email */}
          {firstFieldValue && !errors.firstField && (
            <TextField
              label="Password"
              type="password"
              variant="outlined"
              fullWidth
              margin="normal"
              {...register('password', { required: 'Password is required' })}
              error={!!errors.password}
              helperText={errors.password?.message}
            />
          )}

          {/* Кнопка отправки */}
          <Button type="submit" variant="contained" fullWidth sx={{ marginTop: 2 }}>
            Submit
          </Button>
        </form>

        {/* Snackbar для отображения сообщения после отправки */}
        <Snackbar
          open={openSnackbar}
          autoHideDuration={4000}
          onClose={handleCloseSnackbar}
          message="Log in attempt, check your email"
          anchorOrigin={{
            vertical: 'top',  // Размещение по вертикали в верхней части экрана
            horizontal: 'right',  // Размещение по горизонтали справа
          }}
        />
      </Box>
    </>
  );
};

export default DynamicForm;