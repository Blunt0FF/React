import React, { useState } from 'react';
import { connect } from 'react-redux';
import { setUserInfo } from '../redux/actions';

const UserForm = ({ setUserInfo }) => {
  const [name, setName] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !status.trim()) {
      alert('Пожалуйста, заполните все поля.');
      return;
    }
    setUserInfo(name, status);
    setName('');
    setStatus('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Обновить информацию о пользователе</h2>
      <div>
        <label>
          Имя:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Статус:
          <input
            type="text"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          />
        </label>
      </div>
      <button type="submit">Обновить</button>
    </form>
  );
};

export default connect(null, { setUserInfo })(UserForm);