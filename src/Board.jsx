import { useState } from 'react';
import './Board.css'

function Cell() {
    const [value, setValue] = useState(null);

    function handleClick() {
        setValue('X');
    }

    return (
        <button
        className="cell"
        onClick={handleClick}
        >
        {value}
        </button>
    );
}

function Square({}) {
  return (
    <>
        <table
        className="square"
        >
            <tr>
                <td>
                    <Cell />
                </td>
                <td>
                    <Cell />
                </td>
                <td>
                    <Cell />
                </td>
            </tr>
            <tr>
                <td>
                    <Cell />
                </td>
                <td>
                    <Cell />
                </td>
                <td>
                    <Cell />
                </td>
            </tr>
            <tr>
                <td>
                    <Cell />
                </td>
                <td>
                    <Cell />
                </td>
                <td>
                    <Cell />
                </td>
            </tr>
        </table>
    </>
  );
}

function Board({}) {
  return (
    <>
        <table
        className="board"
        >
            <tr>
                <td>
                    <Square />
                </td>
                <td>
                    <Square />
                </td>
                <td>
                    <Square />
                </td>
            </tr>
            <tr>
                <td>
                    <Square />
                </td>
                <td>
                    <Square />
                </td>
                <td>
                    <Square />
                </td>
            </tr>
            <tr>
                <td>
                    <Square />
                </td>
                <td>
                    <Square />
                </td>
                <td>
                    <Square />
                </td>
            </tr>
        </table>

    </>
  );
}

export default Board