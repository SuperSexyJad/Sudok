import { useState } from 'react';
import './Board.css'

function Notes({notes}: {notes : Array<number|null>}) {
    

    return (
        <table
        className="notes"
        >
            <tbody>
				{Array(3).fill(0).map((_, i) =>  {
					return (
						<tr key={i}>
							{Array(3).fill(0).map((_, j) => {
								return (
									<td key={j}>
                        				{notes[3*i+j]}
									</td>
								)
							}
							)}
						</tr>
					)
				}
				)}
            </tbody>
        </table>
    );
}

function Cell({cells, cellRow, cellColumn, handleClick, isNote, currentNumber} : {cells : Array<Array<number | null>>, cellRow: number, cellColumn : number, handleClick : (cellRow: number, cellColumn: number) => void, isNote : boolean, currentNumber : number | null}) {
    
    const [notes, setNotes] = useState(Array(9).fill(null));

    function handleNotes(){
        if (currentNumber === null) return;
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

        return (
            <button
            className="cell"
            onClick={()=> isNote ? handleNotes() : handleClick(cellRow, cellColumn)}
            >
                {cells[cellRow][cellColumn] ? cells[cellRow][cellColumn] : <Notes notes={notes}/>}
            </button>
        );
}

function Square({cells, squareRow, squareColumn, handleClick, isNote, currentNumber} : {cells : Array<Array<number | null>>, squareRow: number, squareColumn : number, handleClick : (cellRow: number, cellColumn: number) => void, isNote : boolean, currentNumber : number | null}) {
  return (
    <>
        <table
        className="square"
        >
            <tbody>
				
				{Array(3).fill(0).map((_, i) =>  {
					return (
						<tr key={i}>
							{Array(3).fill(0).map((_, j) => {
								return (
									<td key={j}>
										<Cell cells={cells} cellRow={3*squareRow+i} cellColumn={3*squareColumn+j} handleClick={handleClick} isNote={isNote} currentNumber={currentNumber}/>
									</td>
								)
							}
							)}
						</tr>
					)
				}
				)}
            </tbody>
        </table>
    </>
  );
}

export function Board({currentNumber, isNote} : {currentNumber: null | number, isNote: boolean}) {

    const [cells, setCells] = useState<Array<Array<null | number>>>(Array.from({ length: 9 }, () => new Array(9).fill(null)));
    function handleClick(cellRow : number, cellColumn : number) {
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
				
				{Array(3).fill(0).map((_, i) =>  {
					return (
						<tr key={i}>
							{Array(3).fill(0).map((_, j) => {
								return (
									<td key={j}>
										<Square cells={cells} squareRow={i} squareColumn={j} handleClick={handleClick} isNote={isNote} currentNumber={currentNumber}/>
									</td>
								)
							}
							)}
						</tr>
					)
				}
				)}

            </tbody>
            
        </table>

    </>
  );
}

