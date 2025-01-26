import { useContext } from 'react';
import DataContext from '../context/DataContext';

export default function Data() {
  const data = useContext(DataContext);

  if (!data) return <p>Нет данных</p>

  // data && data.user && data.user.credentials && data.user.credentials.login
  // data?.user?.credentials?.login

  return (
    <ul>
      {data && data.map(({ id, title }) => (
        <li key={id}>{title}</li>
      ))}
    </ul>
  )
}