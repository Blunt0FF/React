import { jwtDecode } from 'jwt-decode'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { logout } from '../features/auth/authSlice'

export default function Profile() {
  const dispatch = useDispatch()
  const token = localStorage.getItem('token')
  const tokenData = token ? jwtDecode(token) : null
  const navigate = useNavigate()

  function handleOut() {
    dispatch(logout())
    navigate('/login')
  }

  return (
    <div>
      <h1>{tokenData ? tokenData.user.id : 'Login into your account'}</h1>
      <button onClick={handleOut}>Logout</button>
    </div>
  )
}
