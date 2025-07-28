import { useState } from 'react'
import './App.css'
import Board from './Board.jsx'
import NumPad from './Numpad.jsx'

function App() {
  const [currentNumber, setCurrentNumber] = useState(null)
  const [isNote, setIsNote] = useState(false)

  return (
    <>
      <Board currentNumber={currentNumber} isNote={isNote}/>
      <NumPad isNote={isNote} setIsNote={setIsNote} setCurrentNumber={setCurrentNumber}/>
    </>
  )
}

export default App
