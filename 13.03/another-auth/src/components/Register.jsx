import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from '../redux/slices/authSlice';

export default function Register() {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({ email: '', password: '', confirmPassword: '' })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      return;
    }

    dispatch(register({ email, password }))
  }


  return (
    <form onSubmit={handleSubmit}>
      <input type="email" value={formData.email} name='email' onChange={handleChange} />
      <input type="password" value={formData.password} name='password' onChange={handleChange} />
      <input type="password" value={formData.confirmPassword} name='confirmPassword' onChange={handleChange} />
      <button>Register</button>
    </form>
  )
}