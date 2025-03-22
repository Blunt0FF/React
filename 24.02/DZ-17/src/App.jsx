import React, { useState, useEffect } from 'react';
import { ThemeProvider, createTheme, CssBaseline, Typography, Button } from '@mui/material';
import styled from '@emotion/styled';

const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#1976d2',
    },
    background: {
      default: '#ffffff',
      paper: '#f5f5f5',
    },
  },
});

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#bb86fc',
    },
    background: {
      default: '#121212',
      paper: '#1e1e1e',
    },
  },
});

const StyledButton = styled(Button)(({ theme }) => ({
  marginTop: '20px',
  padding: '10px 20px',
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.mode === 'light' ? '#000' : '#fff',
  animation: 'blink 1.5s infinite alternate',
  transition: 'background-color 0.3s ease, transform 0.3s ease',
  '&:hover': {
    backgroundColor: theme.palette.primary.dark,
    transform: 'scale(1.1)',
  },
}));

const GradientBackground = styled.div(({ isDarkMode }) => ({
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
  padding: '20px',
  background: isDarkMode
    ? 'linear-gradient(135deg, #121212, #1e1e1e, #2c2c2c)'
    : 'linear-gradient(135deg, #ffffff, #f5f5f5, #e0e0e0)',
  transition: 'background 0.5s ease',
}));

const blinkAnimation = `
  @keyframes blink {
    0% {
      box-shadow: 0 0 10px ${lightTheme.palette.primary.main};
    }
    100% {
      box-shadow: 0 0 20px ${darkTheme.palette.primary.main}, 0 0 30px ${darkTheme.palette.primary.main};
    }
  }
`;

function App() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    try {
      const savedTheme = localStorage.getItem('isDarkMode');
      return savedTheme !== null ? JSON.parse(savedTheme) : false;
    } catch (error) {
      console.error('Ошибка при чтении из localStorage:', error);
      return false;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('isDarkMode', JSON.stringify(isDarkMode));
    } catch (error) {
      console.error('Ошибка при записи в localStorage:', error);
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      <GradientBackground isDarkMode={isDarkMode}>
        <Typography
          variant="h4"
          gutterBottom
          sx={{
            color: isDarkMode ? '#bb86fc' : '#1976d2',
            textShadow: isDarkMode ? '0 0 10px #bb86fc' : '0 0 10px #1976d2',
            transition: 'color 0.5s ease, text-shadow 0.5s ease',
          }}
        >
          {isDarkMode ? 'Тёмная тема' : 'Светлая тема'}
        </Typography>
        <StyledButton variant="contained" onClick={toggleTheme}>
          Переключить на {isDarkMode ? 'светлую' : 'тёмную'} тему
        </StyledButton>
      </GradientBackground>
      <style>{blinkAnimation}</style>
    </ThemeProvider>
  );
}

export default App;