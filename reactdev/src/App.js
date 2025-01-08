export default function Board(){

	const [square, setSquares] = useState(Array(9).fill(null)) // Array(9).fill(null) creates an array with nine elements and sets each of them to null. The useState() call around it declares a squares state variable that’s initially set to that array.

	const [xIsNext, setXIsNext] = useState(true); //Each time a player moves, xIsNext (a boolean) will be flipped to determine which player goes next and the game’s state will be saved. 

	function handleClick(i){
		const nextSquares=squares.slice(); //The handleClick function creates a copy of the squares array (nextSquares) with the JavaScript slice() Array method. Then, handleClick updates the nextSquares array to add X to the first ([0] index) square.
		
		if (xIsNext){ 
			nextSquares[i] = 'X'
		} else {
			nextSquares[i] = 'O';
		}
			
		setSquares(nextSquares) // Calling the setSquares function lets React know the state of the component has changed. This will trigger a re-render of the components that use the squares state (Board) as well as its child components (the Square components that make up the board).

		setXIsNext(!xIsNext)
	}

	return (
		<>
		<div className="board-row">
		<Square value={square[0]} onSquareClick={ ()=> handleClick(0) } />
        <Square value={square[1]} onSquareClick={() => handleClick(1)} />
        <Square value={square[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <Square value={square[3]} onSquareClick={() => handleClick(3)} />
        <Square value={square[4]} onSquareClick={() => handleClick(4)} />
        <Square value={square[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className="board-row">
        <Square value={square[6]} onSquareClick={() => handleClick(6)} />
        <Square value={square[7]} onSquareClick={() => handleClick(7)} />
        <Square value={square[8]} onSquareClick={() => handleClick(8)} />
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