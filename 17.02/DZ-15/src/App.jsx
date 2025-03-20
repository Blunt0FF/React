// src/App.js
import React, { useState, useMemo, useCallback } from 'react';
import UserList from './UserList';
import './App.css'; // Подключаем стили

const App = () => {
  const userList = [
    { id: 1, name: 'Анна' },
    { id: 2, name: 'Иван' },
    { id: 3, name: 'Мария' },
    { id: 4, name: 'Дмитрий' },
    { id: 5, name: 'Елена' },
    { id: 6, name: 'Emily' },
    { id: 7, name: 'Liam' },
    { id: 8, name: 'Sophia' },
    { id: 9, name: 'Noah' },
    { id: 10, name: 'Ava' },
    { id: 11, name: 'James' },
    { id: 12, name: 'Lena' },
    { id: 13, name: 'Felix' },
    { id: 14, name: 'Anna' },
    { id: 15, name: 'Maximilian' },
    { id: 16, name: 'Sophie' },
    { id: 17, name: 'Jonas' },
  ];

  const [filter, setFilter] = useState('');

  const filterUsers = useCallback(
    (text) => {
      return userList.filter((user) =>
        user.name.toLowerCase().includes(text.toLowerCase())
      );
    },
    [userList]
  );

  const filteredUsers = useMemo(() => filterUsers(filter), [filter, filterUsers]);

  return (
    <div className="app-container">
      <h1>Фильтрация пользователей</h1>
      <input
        type="text"
        placeholder="Введите имя..."
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />
      <UserList users={filteredUsers}  />
      {filteredUsers.length === 0 && <p>Пользователи не найдены.</p>}
    </div>
  );
};

export default App;