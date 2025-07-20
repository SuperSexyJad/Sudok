import { useState } from 'react';
import './Numpad.css'

function NumButton({value, setCurrentNumber}) {

    function handleClick() {
        setCurrentNumber(value);
    }

    return (
        <button
        className="numButton"
        onClick={handleClick}
        >
        {value}
        </button>
    );
}

function NumPad({setCurrentNumber}) {
  return (
    <>
        <NumButton value={1} setCurrentNumber={setCurrentNumber}/>
        <NumButton value={2} setCurrentNumber={setCurrentNumber}/>
        <NumButton value={3} setCurrentNumber={setCurrentNumber}/>
        <NumButton value={4} setCurrentNumber={setCurrentNumber}/>
        <NumButton value={5} setCurrentNumber={setCurrentNumber}/>
        <NumButton value={6} setCurrentNumber={setCurrentNumber}/>
        <NumButton value={7} setCurrentNumber={setCurrentNumber}/>
        <NumButton value={8} setCurrentNumber={setCurrentNumber}/>
        <NumButton value={9} setCurrentNumber={setCurrentNumber}/>
    </>
  );
}

export default NumPad