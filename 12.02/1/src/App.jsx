import { Provider } from 'react-redux'
import './App.css'
import Cart from './components/Cart'
import ProductList from './components/ProductList'
import store from './redux/store'

function App() {
  return (
    <Provider store={store}>
      <ProductList />
      <Cart />
    </Provider>
  )
}

export default App
