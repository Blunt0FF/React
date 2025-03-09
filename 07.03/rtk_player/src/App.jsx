import store from './redux/store'
import {Provider} from 'react-redux'
import './App.css'

function App() {
  
  return (
    <Provider store={store}>
      
    </Provider>
  )
}

export default App
