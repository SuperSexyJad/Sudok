import { useState } from 'react';
import './Board.css'

function Cell({cells, cellRow, cellColumn, handleClick}) {
    
    return (
        <button
        className="cell"
        onClick={()=> handleClick(cellRow,cellColumn)}
        >
        {cells[cellRow][cellColumn]}
        </button>
    );
}

function Square({cells, squareRow, squareColumn, handleClick}) {
  return (
    <>
        <table
        className="square"
        >
            <tbody>
                <tr>
                    <td>
                        <Cell cells={cells} cellRow={3*squareRow} cellColumn={3*squareColumn} handleClick={handleClick}/>
                    </td>
                    <td>
                        <Cell cells={cells} cellRow={3*squareRow} cellColumn={3*squareColumn+1} handleClick={handleClick}/>
                    </td>
                    <td>
                        <Cell cells={cells} cellRow={3*squareRow} cellColumn={3*squareColumn+2} handleClick={handleClick}/>
                    </td>
                </tr>
                <tr>
                    <td>
                        <Cell cells={cells} cellRow={3*squareRow+1} cellColumn={3*squareColumn} handleClick={handleClick}/>
                    </td>
                    <td>
                        <Cell cells={cells} cellRow={3*squareRow+1} cellColumn={3*squareColumn+1} handleClick={handleClick}/>
                    </td>
                    <td>
                        <Cell cells={cells} cellRow={3*squareRow+1} cellColumn={3*squareColumn+2} handleClick={handleClick}/>
                    </td>
                </tr>
                <tr>
                    <td>
                        <Cell cells={cells} cellRow={3*squareRow+2} cellColumn={3*squareColumn} handleClick={handleClick}/>
                    </td>
                    <td>
                        <Cell cells={cells} cellRow={3*squareRow+2} cellColumn={3*squareColumn+1} handleClick={handleClick}/>
                    </td>
                    <td>
                        <Cell cells={cells} cellRow={3*squareRow+2} cellColumn={3*squareColumn+2} handleClick={handleClick}/>
                    </td>
                </tr>
            </tbody>
        </table>
    </>
  );
}

function Board({currentNumber}) {

    const [cells, setCells] = useState(Array.from({ length: 9 }, () => new Array(9).fill(null)));
    console.log({cells})
    console.log(cells[0][0])
    console.log(currentNumber)

    function handleClick(cellRow, cellColumn) {
        console.log('clicked')
        console.log(cellRow)
        console.log(cellColumn)
        if (cells[cellRow][cellColumn]) {
        return;
        }
        const nextCells = cells.slice();
        console.log(nextCells[cellRow][cellColumn])
        nextCells[cellRow][cellColumn] = currentNumber;
        console.log(nextCells[cellRow][cellColumn])
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
                        <Square cells={cells} squareRow={0} squareColumn={0} handleClick={handleClick}/>
                    </td>
                    <td>
                        <Square cells={cells} squareRow={0} squareColumn={1} handleClick={handleClick}/>
                    </td>
                    <td>
                        <Square cells={cells} squareRow={0} squareColumn={2} handleClick={handleClick}/>
                    </td>
                </tr>
                <tr>
                    <td>
                        <Square cells={cells} squareRow={1} squareColumn={0} handleClick={handleClick}/>
                    </td>
                    <td>
                        <Square cells={cells} squareRow={1} squareColumn={1} handleClick={handleClick}/>
                    </td>
                    <td>
                        <Square cells={cells} squareRow={1} squareColumn={2} handleClick={handleClick}/>
                    </td>
                </tr>
                <tr>
                    <td>
                        <Square cells={cells} squareRow={2} squareColumn={0} handleClick={handleClick}/>
                    </td>
                    <td>
                        <Square cells={cells} squareRow={2} squareColumn={1} handleClick={handleClick}/>
                    </td>
                    <td>
                        <Square cells={cells} squareRow={2} squareColumn={2} handleClick={handleClick}/>
                    </td>
                </tr>
            </tbody>
            
        </table>

    </>
  );
}

export default Board