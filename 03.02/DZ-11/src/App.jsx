import './App.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Article from './components/pages/Article/Article'
import Home from './components/pages/Home/Home'
import List from './components/pages/List/List'

function Menu() {
  return (

      <nav className="menu">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/List">List</Link>
          </li>
          <li>
            <Link to="/List/Article">Article</Link>
          </li>
        </ul>
      </nav>
      )
}

export default function App() {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/List" element={<List />} />
        <Route path="/List/Article" element={<Article />} />
      </Routes>
    </BrowserRouter>
  )
}