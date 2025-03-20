import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import User from './components/User';
import UseForm from './components/UseForm';


const App = () => {
  return (
    <Provider store={store}>
      <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
        <h1>Управление состоянием пользователя</h1>
        <User />
        <hr />
        <UseForm />
      </div>
    </Provider>
  );
};

export default App;