import { useState } from 'react';
import { clearUser, setUser } from '../rtk-examples/slices/userSlice';
import { useDispatch } from 'react-redux';

export default function UserForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const dispatch = useDispatch();

  const handleSetUser = () => {
    dispatch(setUser({
      id: Date.now(),
      name,
      email
    }))
  }

  const handleClearUser = () => {
    dispatch(clearUser())
  }

  return (
    <form>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
      <button onClick={handleSetUser}>Set User</button>
      <button onClick={handleClearUser}>Clear User</button>
    </form>
  )
}