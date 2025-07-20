import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import OurComponent from './OurComponent.jsx'
import Board from './Board.jsx'
import NumPad from './Numpad.jsx'

function App() {
  const [currentNumber, setCurrentNumber] = useState(null)

  return (
    <>
      <Board currentNumber={currentNumber}/>
      <NumPad currentNumber={currentNumber} setCurrentNumber={setCurrentNumber}/>
    </>
  )
}

export default App
