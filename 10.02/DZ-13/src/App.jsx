import React from 'react';
import Filter from './components/Filter';
import UserList from './components/UserList';

function App() {
  return (
    <div className="app" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundColor: '#f0f0f0', height: '660px' }}> 
      <h1>User List</h1>
      <Filter />
      <UserList />
    </div>
  );
}

export default App;