import { useState } from 'react';
import './Numpad.css'

function NumButton({value, setCurrentNumber, isActive, setActiveNum} : {value : number|null, setCurrentNumber : (value : number|null) => void, isActive : boolean, setActiveNum : (value : number|null) => void}) {

	function handleClick() {
		setCurrentNumber(value);
		setActiveNum(value);
	}

	let className = isActive ? "numButton active" : "numButton";

	return (
			<button
			className={className}
			onClick={handleClick}
			>
			{value}
			</button>  
		);
}

function NoteButton({isNote, setIsNote} : {isNote : boolean, setIsNote : (value: boolean) => void}) {
	
	function handleClick() {
		setIsNote(!isNote);
	}

	let className = isNote ? "numButton active" : "numButton";

	return (
		<button
		className={className}
		onClick={handleClick}
		>
		N
		</button>  
	);
}

export function NumPad({isNote, setIsNote, setCurrentNumber} : {isNote : boolean, setIsNote : (value: boolean) => void, setCurrentNumber : (value: number|null) => void}) {
	const [activeNum, setActiveNum] = useState<null | number>(null);
	return (
		<>
			{Array(9).fill(0).map((_, i) => (
				<NumButton value={i + 1} setCurrentNumber={setCurrentNumber} isActive={activeNum === i + 1} setActiveNum={setActiveNum} key={i}/>)
			)}
			<NoteButton isNote={isNote} setIsNote={setIsNote}/>
		</>
	);
}
