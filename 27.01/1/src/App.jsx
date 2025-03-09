
import './App.css'
import Main from './componets/Main'
import {UserContextProvider} from './context/UserContext'

function App() {
 

  return (
    <UserContextProvider>
       <Main/>
    </UserContextProvider>
   
  )
}

export default App
