/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import {
  Button,
  createTheme,
  CssBaseline,
  ThemeProvider,
  Typography,
} from '@mui/material'
import { styled } from '@mui/system'
import { useState } from 'react'
import SxExample from './SxExample'

// MUI CSS-in-JS
const MyButton = styled('button')({
  background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8EB3 90%)',
  border: 0,
  borderRadius: 3,
  boxShadow: '0 3px 5px 2px rgba(255, 105, 135 .3)',
  color: 'white',
  height: 48,
  padding: '0 30px',
})

// Raw emotion/react
const dynamicStyle = active => css`
  background: ${active
    ? 'linear-gradient(45deg, #FE6B8B 30%, #FF8EB3 90%)'
    : 'grey'};
  border: 0;
  border-radius: 3;
  box-shadow: 0 3px 5px 2px
    ${active ? 'rgba(255, 105, 135, .3)' : 'rgba(0, 0, 0, .3)'};
  color: ${active ? 'white' : 'black'};
  height: 48;
  padding: 0 30px;
`

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
      contrastText: '#fff',
    },
    secondary: {
      main: '#dc004e',
      contrastText: '#000',
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
    h1: {
      fontSize: '2rem',
      fontWeight: 'bold',
    },
    h2: {
      fontSize: '1.5rem',
      fontWeight: 'bold',
    },
  },
})

const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: { main: '#1976d2' },
    secondary: { main: '#dc004e' },
  },
})

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: { main: '#90caf9' },
    secondary: { main: '#f48fb1' },
  },
})

export default function App() {
  const [active, setActive] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(false)

  const toggleTheme = () => setIsDarkMode(isDarkMode => !isDarkMode)

  const handleClick = () => setActive(active => !active)

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      <SxExample>
        <Typography variant='h1'>MUI Styling</Typography>
        <Button
          variant='contained'
          color='primary'
          style={{ marginLeft: 10 }}
          onClick={toggleTheme}
        >
          Change Theme
        </Button>
        <div style={{ padding: 20 }}>
          <Typography variant='h2'>EMOTION</Typography>
          <MyButton>Styled Button</MyButton>
          <button css={dynamicStyle(active)} onClick={handleClick}>
            Emotion button
          </button>
        </div>
        <div style={{ padding: 20 }}>
          <Typography variant='h2'>THEME</Typography>
          <Button
            variant='contained'
            color='primary'
            style={{ marginLeft: 10 }}
          >
            Primary
          </Button>
          <Button
            variant='contained'
            color='secondary'
            style={{ marginLeft: 10 }}
          >
            Secondary
          </Button>
        </div>
      </SxExample>
    </ThemeProvider>
  )
}
