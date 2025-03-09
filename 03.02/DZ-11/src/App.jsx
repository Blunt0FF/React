import './App.css'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Article from './components/pages/Article/Article'
import Home from './components/pages/Home/Home'
import List from './components/pages/List/List'


export default function App() {
  return (
    <BrowserRouter> 
    <Route>
    <Route path='/' element={<Home/>}/>
    <Route path='/List' element={<List/>}/>
    <Route path='/List/Article' element={<Article/>}/>
    </Route>
    </BrowserRouter>
  )
}
