import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../redux/slices/authSlice';

export default function Login() {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({ email: '', password: '' })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login({ email, password }))
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="email" value={formData.email} name='email' onChange={handleChange} />
      <input type="password" value={formData.password} name='password' onChange={handleChange} />
      <button>Register</button>
    </form>
  )
}