import { AppBar, Button, TextField, Toolbar, Typography } from '@mui/material'

export default function SimpleInterface() {
  return (
    <div>
      <AppBar position='static'>
        <Toolbar>
          <Typography variant='h6' gutterBottom>
            Simple App
          </Typography>
        </Toolbar>
      </AppBar>

      <div style={{ marginTop: 20 }}>
        {/* Typography = p */}
        <Typography variant='h5' gutterBottom>
          Enter your data
        </Typography>
        {/* TextField = input */}
        <TextField label='Name' variant='outlined' fullWidth margin='normal' />
        <TextField label='Email' variant='outlined' fullWidth margin='normal' />
        <Button variant='contained' color='primary'>
          Submit
        </Button>
      </div>
    </div>
  )
}
