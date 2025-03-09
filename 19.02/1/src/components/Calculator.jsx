import { Button, Container, TextField, Typography } from '@mui/material'
import { useState } from 'react'

export default function Calculator() {
  const [num1, setNum1] = useState('')
  const [num2, setNum2] = useState('')
  const [result, setResult] = useState(null)

  const handleNum1Change = e => setNum1(e.target.value)
  const handleNum2Change = e => setNum2(e.target.value)

  const handleAddition = () => setResult(parseFloat(num1) + parseFloat(num2))
  const handleSubtraction = () => setResult(parseFloat(num1) - parseFloat(num2))
  const handleMultiplication = () =>
    setResult(parseFloat(num1) * parseFloat(num2))
  const handleDivision = () => setResult(parseFloat(num1) / parseFloat(num2))

  return (
    <Container>
      <Typography variant='h4' gutterBottom>
        Calculator
      </Typography>

      <TextField
        label='First number'
        variant='outlined'
        margin='normal'
        fullWidth
        type='number'
        value={num1}
        onChange={handleNum1Change}
      />
      <TextField
        label='Second number'
        variant='outlined'
        margin='normal'
        fullWidth
        type='number'
        value={num2}
        onChange={handleNum2Change}
      />

      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        <Button
          variant='contained'
          color='primary'
          fullWidth
          onClick={handleAddition}
        >
          +
        </Button>
        <Button
          variant='contained'
          color='primary'
          fullWidth
          onClick={handleSubtraction}
        >
          -
        </Button>
        <Button
          variant='contained'
          color='primary'
          fullWidth
          onClick={handleMultiplication}
        >
          *
        </Button>
        <Button
          variant='contained'
          color='primary'
          fullWidth
          onClick={handleDivision}
        >
          /
        </Button>
      </div>

      {result !== null && (
        <Typography variant='h5' gutterBottom>
          Result: {result}
        </Typography>
      )}
    </Container>
  )
}
