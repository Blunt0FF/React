import { Box, Button, TextField, Typography } from '@mui/material'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { login, resetState } from '../features/auth/authSlice'

export default function Login() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { isLoading, isError, isSuccess, message } = useSelector(
    state => state.auth
  )
  const [formData, setFormData] = useState({ email: '', password: '' })

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }
  const handleSubmit = e => {
    e.preventDefault()
    dispatch(login({ email: formData.email, password: formData.password }))
  }

  useEffect(() => {
    return () => {
      dispatch(resetState())
    }
  }, [dispatch])

  useEffect(() => {
    if (isSuccess) {
      navigate('/profile')
    }
  }, [isSuccess])

  return (
    <Box>
      <form
        onSubmit={handleSubmit}
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <TextField
          type='email'
          name='email'
          placeholder='email'
          value={formData.email}
          onChange={handleChange}
          required
        />
        <TextField
          type='password'
          name='password'
          placeholder='password'
          value={formData.password}
          onChange={handleChange}
          required
        />
        <Button disabled={isLoading} type='submit'>
          Login
        </Button>
      </form>
      {isError && <Typography>{message}</Typography>}
      {isSuccess && <Typography>Login Successful</Typography>}
    </Box>
  )
}
