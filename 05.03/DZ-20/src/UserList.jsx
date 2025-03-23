// src/UserList.js
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addUser, removeUser, editUser } from './userSlice';

const UserList = () => {
  const users = useSelector((state) => state.users.users);
  const dispatch = useDispatch();

  // Состояние для формы добавления
  const [newName, setNewName] = useState('');
  const [newEmail, setNewEmail] = useState('');

  // Состояние для редактирования
  const [editId, setEditId] = useState(null);
  const [editName, setEditName] = useState('');
  const [editEmail, setEditEmail] = useState('');

  // Добавление нового пользователя
  const handleAddUser = () => {
    if (newName.trim() && newEmail.trim()) {
      dispatch(addUser({ name: newName, email: newEmail }));
      setNewName('');
      setNewEmail('');
    }
  };

  // Редактирование пользователя
  const handleEdit = (id, name, email) => {
    setEditId(id);
    setEditName(name);
    setEditEmail(email);
  };

  const handleSave = (id) => {
    dispatch(editUser({ id, name: editName, email: editEmail }));
    setEditId(null);
    setEditName('');
    setEditEmail('');
  };

  return (
    <div>
      <h2>Список пользователей</h2>

      {/* Форма добавления пользователя */}
      <div style={{ marginBottom: '1rem' }}>
        <input
          type="text"
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
          placeholder="Введите имя"
          style={{ marginRight: '0.5rem', padding: '0.5rem' }}
        />
        <input
          type="email"
          value={newEmail}
          onChange={(e) => setNewEmail(e.target.value)}
          placeholder="Введите email"
          style={{ marginRight: '0.5rem', padding: '0.5rem' }}
        />
        <button onClick={handleAddUser} style={{ padding: '0.5rem 1rem' }}>
          Добавить пользователя
        </button>
      </div>

      {/* Список пользователей */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {users.map((user) => (
          <div
            key={user.id}
            style={{
              padding: '1rem',
              border: '1px solid #ccc',
              borderRadius: '8px',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
              backgroundColor: '#f9f9f9',
            }}
          >
            {editId === user.id ? (
              <div>
                <input
                  type="text"
                  value={editName}
                  onChange={(e) => setEditName(e.target.value)}
                  placeholder="Имя"
                  style={{ marginRight: '0.5rem', padding: '0.5rem' }}
                />
                <input
                  type="email"
                  value={editEmail}
                  onChange={(e) => setEditEmail(e.target.value)}
                  placeholder="Email"
                  style={{ marginRight: '0.5rem', padding: '0.5rem' }}
                />
                <button onClick={() => handleSave(user.id)} style={{ padding: '0.5rem 1rem' }}>
                  Сохранить
                </button>
              </div>
            ) : (
              <div>
                <strong>{user.name}</strong> - {user.email}
                <div style={{ marginTop: '0.5rem' }}>
                  <button onClick={() => handleEdit(user.id, user.name, user.email)}>
                    Редактировать
                  </button>
                  <button onClick={() => dispatch(removeUser(user.id))} style={{ marginLeft: '0.5rem' }}>
                    Удалить
                  </button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserList;