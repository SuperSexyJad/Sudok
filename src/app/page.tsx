"use client"

import { Board } from "./Board";
import { useState } from "react";
import { NumPad } from "./Numpad";


export default function Home() {
  const [currentNumber, setCurrentNumber] = useState<null | number>(null)
  const [isNote, setIsNote] = useState(false)

  return (
    <>
      <Board currentNumber={currentNumber} isNote={isNote}/>
      <NumPad isNote={isNote} setIsNote={setIsNote} setCurrentNumber={setCurrentNumber}/>
    </>
  );
}
