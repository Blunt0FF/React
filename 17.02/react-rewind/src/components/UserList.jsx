import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';

export default function UserList() {
  const [users, setUsers] = useState([])

  const fetchUsers = async () => {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/users')
      setUsers(response.data);
    } catch (error) {
      console.error('Error fetching users:', error)
    }
  }

  useEffect(() => {
    fetchUsers()
  }, [])

  return (
    <div>
      <h1>User List</h1>
      <button onClick={fetchUsers}>Refresh Users</button>
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  )
}

// // 1 render
// UserList()
// // внутри UserList
// const render1 = {
//   str: 'My Users',
//   fetchUsers: () => {},
// }
// // 2 render (rerender)
// UserList()
// const render2 = {
//   str: 'My Users',
//   fetchUsers: () => {},
// }

// // ChildCompnent
// render1.str === render2.str // true
// render1.fetchUsers === render2.fetchUsers // false