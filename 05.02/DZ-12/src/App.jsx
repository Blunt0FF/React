import React, { useState } from 'react';
import './App.css';
import ValueDisplay from './ValueDisplay';

function App() {
  const [value, setValue] = useState('');

  return (
    <div className="app">
      <h1>Current and previous values</h1>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Enter text"
      />
      <ValueDisplay value={value} />
    </div>
  );
}

export default App;