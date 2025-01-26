import { LanguageProvider } from './contexts/LanguageContext'
import ListItems from './components/ListItems'
import LanguageSwitch from './components/LanguageSwitch'
import './App.css'

function App() {
  return (
    <LanguageProvider>
      <div className="app">
        <LanguageSwitch/>
        <ListItems/>
      </div>
        
    </LanguageProvider>
  )
}

export default App
