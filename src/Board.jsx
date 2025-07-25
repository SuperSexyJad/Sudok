import { useState } from 'react';
import './Board.css'

function Notes({notes}) {
    

    return (
        <table
        className="notes"
        >
            <tbody>
                <tr>
                    <td>
                        {notes[0]}
                    </td>
                    <td>
                        {notes[1]}
                    </td>
                    <td>
                        {notes[2]}
                    </td>
                </tr>
                <tr>
                    <td>
                        {notes[3]}
                    </td>
                    <td>
                        {notes[4]}
                    </td>
                    <td>
                        {notes[5]}
                    </td>
                </tr>
                <tr>
                    <td>
                        {notes[6]}
                    </td>
                    <td>
                        {notes[7]}
                    </td>
                    <td>
                        {notes[8]}
                    </td>
                </tr>
            </tbody>
        </table>
    );
}

function Cell({cells, cellRow, cellColumn, handleClick, isNote, currentNumber}) {
    
    const [notes, setNotes] = useState(Array(9).fill(null));
    console.log(notes)

    function handleNotes(){
        const nextNotes = notes.slice();
        if (notes[currentNumber-1]) {
            if (notes[currentNumber-1] == currentNumber){
                nextNotes[currentNumber-1] = null;
                setNotes(nextNotes);
            }
        return;
        }
        nextNotes[currentNumber-1] = currentNumber;
        setNotes(nextNotes);
    }

    if (!cells[cellRow][cellColumn] && isNote){
        return (
            <button
            className="cell"
            onClick={()=> handleNotes()}
            >
                <Notes notes={notes}/>
            </button>
        );
    } else if (!cells[cellRow][cellColumn] && !isNote){
        return (
            <button
            className="cell"
            onClick={()=> handleClick(cellRow, cellColumn)}
            >
                <Notes notes={notes}/>
            </button>
        );
    } else if (cells[cellRow][cellColumn] && !isNote){
        return (
            <button
            className="cell"
            onClick={()=> handleClick(cellRow, cellColumn)}
            >
            {cells[cellRow][cellColumn]}
            </button>
        );
    } else{
        return (
            <button
            className="cell"
            >
            {cells[cellRow][cellColumn]}
            </button>
        );
    }
}

function Square({cells, squareRow, squareColumn, handleClick, isNote, currentNumber}) {
  return (
    <>
        <table
        className="square"
        >
            <tbody>
                <tr>
                    <td>
                        <Cell cells={cells} cellRow={3*squareRow} cellColumn={3*squareColumn} handleClick={handleClick} isNote={isNote} currentNumber={currentNumber}/>
                    </td>
                    <td>
                        <Cell cells={cells} cellRow={3*squareRow} cellColumn={3*squareColumn+1} handleClick={handleClick} isNote={isNote} currentNumber={currentNumber}/>
                    </td>
                    <td>
                        <Cell cells={cells} cellRow={3*squareRow} cellColumn={3*squareColumn+2} handleClick={handleClick} isNote={isNote} currentNumber={currentNumber}/>
                    </td>
                </tr>
                <tr>
                    <td>
                        <Cell cells={cells} cellRow={3*squareRow+1} cellColumn={3*squareColumn} handleClick={handleClick} isNote={isNote} currentNumber={currentNumber}/>
                    </td>
                    <td>
                        <Cell cells={cells} cellRow={3*squareRow+1} cellColumn={3*squareColumn+1} handleClick={handleClick} isNote={isNote} currentNumber={currentNumber}/>
                    </td>
                    <td>
                        <Cell cells={cells} cellRow={3*squareRow+1} cellColumn={3*squareColumn+2} handleClick={handleClick} isNote={isNote} currentNumber={currentNumber}/>
                    </td>
                </tr>
                <tr>
                    <td>
                        <Cell cells={cells} cellRow={3*squareRow+2} cellColumn={3*squareColumn} handleClick={handleClick} isNote={isNote} currentNumber={currentNumber}/>
                    </td>
                    <td>
                        <Cell cells={cells} cellRow={3*squareRow+2} cellColumn={3*squareColumn+1} handleClick={handleClick} isNote={isNote} currentNumber={currentNumber}/>
                    </td>
                    <td>
                        <Cell cells={cells} cellRow={3*squareRow+2} cellColumn={3*squareColumn+2} handleClick={handleClick} isNote={isNote} currentNumber={currentNumber}/>
                    </td>
                </tr>
            </tbody>
        </table>
    </>
  );
}

function Board({currentNumber, isNote}) {

    const [cells, setCells] = useState(Array.from({ length: 9 }, () => new Array(9).fill(null)));

    function handleClick(cellRow, cellColumn) {
        const nextCells = cells.slice();
        if (cells[cellRow][cellColumn]) {
            if (cells[cellRow][cellColumn] == currentNumber){
                nextCells[cellRow][cellColumn] = null;
                setCells(nextCells);
            }
        return;
        }
        nextCells[cellRow][cellColumn] = currentNumber;
        setCells(nextCells);
    }

  return (
    <>
        <table
        className="board"
        >
            <tbody>
                <tr>
                    <td>
                        <Square cells={cells} squareRow={0} squareColumn={0} handleClick={handleClick} isNote={isNote} currentNumber={currentNumber}/>
                    </td>
                    <td>
                        <Square cells={cells} squareRow={0} squareColumn={1} handleClick={handleClick} isNote={isNote} currentNumber={currentNumber}/>
                    </td>
                    <td>
                        <Square cells={cells} squareRow={0} squareColumn={2} handleClick={handleClick} isNote={isNote} currentNumber={currentNumber}/>
                    </td>
                </tr>
                <tr>
                    <td>
                        <Square cells={cells} squareRow={1} squareColumn={0} handleClick={handleClick} isNote={isNote} currentNumber={currentNumber}/>
                    </td>
                    <td>
                        <Square cells={cells} squareRow={1} squareColumn={1} handleClick={handleClick} isNote={isNote} currentNumber={currentNumber}/>
                    </td>
                    <td>
                        <Square cells={cells} squareRow={1} squareColumn={2} handleClick={handleClick} isNote={isNote} currentNumber={currentNumber}/>
                    </td>
                </tr>
                <tr>
                    <td>
                        <Square cells={cells} squareRow={2} squareColumn={0} handleClick={handleClick} isNote={isNote} currentNumber={currentNumber}/>
                    </td>
                    <td>
                        <Square cells={cells} squareRow={2} squareColumn={1} handleClick={handleClick} isNote={isNote} currentNumber={currentNumber}/>
                    </td>
                    <td>
                        <Square cells={cells} squareRow={2} squareColumn={2} handleClick={handleClick} isNote={isNote} currentNumber={currentNumber}/>
                    </td>
                </tr>
            </tbody>
            
        </table>

    </>
  );
}

export default Board