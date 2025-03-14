import { jwtDecode } from 'jwt-decode'

export default function Profile() {
  const token = localStorage.getItem('token')
  const tokenData = token ? jwtDecode(token) : null

  return (
    <div>
      <h1>{tokenData ? tokenData.user.id : 'Login into your account'}</h1>
    </div>
  )
}
