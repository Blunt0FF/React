// src/UserList.js
import React from 'react';

const UserList = ({ users }) => {
  return (
    <ul className="UserList">
      {users.map((user) => (
        <li key={user.id} className="user-item">
          {user.name}
        </li>
      ))}
    </ul>
  );
};

export default UserList;