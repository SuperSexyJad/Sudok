import { useState } from 'react';
import './Numpad.css'

function NumButton({value, setCurrentNumber, isActive, setActiveNum}) {

    function handleClick() {
        setCurrentNumber(value);
        setActiveNum(value);
    }

    if (isActive){
        return (
            <button
            className="numButton"
            onClick={handleClick}
            style={{background: "gray"}}
            >
            {value}
            </button>  
        );
    } else {
        return (
            <button
            className="numButton"
            onClick={handleClick}
            >
            {value}
            </button>  
        );
    }
}

function NumPad({setCurrentNumber}) {
    const [activeNum, setActiveNum] = useState(null);
    return (
        <>
            <NumButton value={1} setCurrentNumber={setCurrentNumber} isActive={activeNum === 1} setActiveNum={setActiveNum}/>
            <NumButton value={2} setCurrentNumber={setCurrentNumber} isActive={activeNum === 2} setActiveNum={setActiveNum}/>
            <NumButton value={3} setCurrentNumber={setCurrentNumber} isActive={activeNum === 3} setActiveNum={setActiveNum}/>
            <NumButton value={4} setCurrentNumber={setCurrentNumber} isActive={activeNum === 4} setActiveNum={setActiveNum}/>
            <NumButton value={5} setCurrentNumber={setCurrentNumber} isActive={activeNum === 5} setActiveNum={setActiveNum}/>
            <NumButton value={6} setCurrentNumber={setCurrentNumber} isActive={activeNum === 6} setActiveNum={setActiveNum}/>
            <NumButton value={7} setCurrentNumber={setCurrentNumber} isActive={activeNum === 7} setActiveNum={setActiveNum}/>
            <NumButton value={8} setCurrentNumber={setCurrentNumber} isActive={activeNum === 8} setActiveNum={setActiveNum}/>
            <NumButton value={9} setCurrentNumber={setCurrentNumber} isActive={activeNum === 9} setActiveNum={setActiveNum}/>
        </>
    );
}

export default NumPad