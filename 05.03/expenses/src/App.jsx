import store from './redux/store'
import {Provider} from 'react-redux'
import './App.css'
import ExpenseList from './components/ExpenseList'

function App() {
  

  return (
    <Provider store={store}>
      <ExpenseList />
    </Provider>
  )
}

export default App
