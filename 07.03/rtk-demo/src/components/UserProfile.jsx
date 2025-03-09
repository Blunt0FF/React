import { useSelector } from 'react-redux';

export default function UserProfile() {
  const user = useSelector((state) => state.user.user)

  return (
    <div>
      <h1>User Profile</h1>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
    </div>
  )
}