export default function Board(){

	const [square, setSquares] = useState(Array(9).fill(null)) // Array(9).fill(null) creates an array with nine elements and sets each of them to null. The useState() call around it declares a squares state variable that’s initially set to that array. 

	function handleClick(i){
		const nextSquares=squares.slice(); //The handleClick function creates a copy of the squares array (nextSquares) with the JavaScript slice() Array method. Then, handleClick updates the nextSquares array to add X to the first ([0] index) square.
		nextSquares[i] = 'X'
		setSquares(nextSquares) // Calling the setSquares function lets React know the state of the component has changed. This will trigger a re-render of the components that use the squares state (Board) as well as its child components (the Square components that make up the board).
	}

	return (
		<>
		<div className="board-row">
		<Square value={square[0]} onSquareClick={ handleClick } />
        <Square value={square[1]} />
        <Square value={square[2]} />
      </div>
      <div className="board-row">
        <Square value={square[3]} />
        <Square value={square[4]} />
        <Square value={square[5]} />
      </div>
      <div className="board-row">
        <Square value={square[6]} />
        <Square value={square[7]} />
        <Square value={square[8]} />
      </div>
	  	
		</>
	)
}

import { useState } from "react"

function Square(value, onSquareClick){
	return
	<button className="square" onClick={ onSquareClick }>
	{value}
	</button>
}