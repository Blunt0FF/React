import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Navigation from './components/Navigation/Navigation';
import Dashboard from './components/Dashboard';
import Profile from './components/Profile';
import Settings from './components/Settings';
import RouterHooks from './components/RouterHooks/RouterHooks';

function App() {
  return (
    <div className='app'>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/users/:id" element={<RouterHooks />} />
      </Routes>
    </div>
  );
}

export default App;
