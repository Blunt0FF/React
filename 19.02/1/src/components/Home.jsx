import {
  AppBar,
  Container,
  Toolbar,
  Typography,
  Box,
  Paper,
  TextField,
  Button,
} from '@mui/material'
import { useState } from 'react'

export default function Home() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [submittedData, setSubmittedData] = useState(null)

  const handleSubmit = e => {
    e.preventDefault()
    setSubmittedData({ name, email })
    setName('')
    setEmail('')
  }

  return (
    <>
      <AppBar position='static'>
        <Toolbar>
          <Typography variant='h6'>Material UI Form</Typography>
        </Toolbar>
      </AppBar>

      <Container>
        <Box mt={4}>
          <Paper elevation={3} style={{ padding: 16 }}>
            <Typography variant='h5' gutterBottom>
              Enter your data
            </Typography>
            <form onSubmit={handleSubmit}>
              <TextField
                label='Name'
                variant='outlined'
                placeholder='Enter your name'
                fullWidth
                margin='normal'
                value={name}
                onChange={e => setName(e.target.value)}
              />
              <TextField
                label='Email'
                variant='outlined'
                placeholder='Enter your name'
                fullWidth
                margin='normal'
                type='email'
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
              <Box mt={2}>
                <Button
                  type='submit'
                  variant='contained'
                  color='primary'
                  fullWidth
                  disabled={!name || !email}
                >
                  Submit
                </Button>
              </Box>
            </form>
          </Paper>
          {submittedData && (
            <Box mt={4}>
              <Paper elevation={3} style={{ padding: 16 }}>
                <Typography variant='h6' gutterBottom>
                  Submitted data:
                </Typography>
                <Typography variant='body1'>
                  Name: <strong>{submittedData.name}</strong>
                </Typography>
                <Typography variant='body1'>
                  Email: <strong>{submittedData.email}</strong>
                </Typography>
              </Paper>
            </Box>
          )}
        </Box>
      </Container>
    </>
  )
}
