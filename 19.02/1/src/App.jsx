import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Calculator from './components/Calculator'
import IconDemo from './components/IconDemo'
import SimpleInterface from './components/SimpleInterface'

function App() {
  return (
    <BrowserRouter>
      {/* <SimpleInterface />
    <IconDemo /> */}
      <nav style={{ display: 'flex', gap: 16 }}>
        <Link to='/'>Home</Link>
        <Link to='/calc'>Calculator</Link>
      </nav>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/calc' element={<Calculator />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
