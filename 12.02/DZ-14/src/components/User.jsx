import React from 'react';
import { connect } from 'react-redux';

const User = ({ name, status }) => {
  return (
    <div>
      <h2>Информация о пользователе</h2>
      <p><strong>Имя:</strong> {name}</p>
      <p><strong>Статус:</strong> {status}</p>
    </div>
  );
};

const mapStateToProps = (state) => ({
  name: state.name,
  status: state.status,
});

export default connect(mapStateToProps)(User);