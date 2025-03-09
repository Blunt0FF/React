import {
  createTheme,
  CssBaseline,
  ThemeProvider,
  Typography,
} from '@mui/material'

// const darkTheme = createTheme({
//   palette: {
//     mode: 'dark'
//   }
// });

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
    error: {
      main: '#f44336',
    },
    warning: {
      main: '#ffa726',
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
    h1: {
      fontSize: '2.5rem',
      fontWeight: 500,
      lineHeight: 1.2,
      letterSpacing: '-0.01625em',
    },
    body1: {
      fontSize: '1rem',
      fontWeight: 400,
      lineHeight: 1.5,
    },
  },
  spacing: 8, // базовая единица отступа -> 8px
})

export default function Theme() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <main>Using dark theme</main>
      <Typography variant='body1'>typo</Typography>
    </ThemeProvider>
  )
}
