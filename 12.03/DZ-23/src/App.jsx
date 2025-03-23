import {
  NavLink,
  Route,
  BrowserRouter as Router,
  Routes,
} from 'react-router-dom'
import ProtectedRoute from './components/ProtectedRoute'
import Login from './pages/Login'
import Profile from './pages/Profile'
import Register from './pages/Register'

export default function App() {
  return (
    <Router>
      <nav className='navLinks'>
        <NavLink to='/login'>Login</NavLink>
        <NavLink to='/register'>Register</NavLink>
        <NavLink to='/profile'>Profile</NavLink>
      </nav>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route
          path='/profile'
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />
        <Route path='/' element={<Login />} />
      </Routes>
    </Router>
  )
}
