import './App.css'
import MainComponent from "./MainComponent"
import { GameProvider } from "../../context/GameContext"

function App() {
  return (
    <GameProvider>
      <MainComponent />
    </GameProvider>
  )
}

export default App

