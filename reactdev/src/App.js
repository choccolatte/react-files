export default function Board({xIsNext, square, onPlay}){ //Let’s make the Board component fully controlled by the props it receives. Change the Board component to take three props: xIsNext, squares, and a new onPlay function that Board can call with the updated squares array when a player makes a move. Next, remove the first two lines of the Board function that call useState:


	// const [square, setSquares] = useState(Array(9).fill(null)) // Array(9).fill(null) creates an array with nine elements and sets each of them to null. The useState() call around it declares a squares state variable that’s initially set to that array.

	// const [xIsNext, setXIsNext] = useState(true); //Each time a player moves, xIsNext (a boolean) will be flipped to determine which player goes next and the game’s state will be saved. 

	function handleClick(i){
		
		if (calculateWinner(square) || square[i]) {
			return;
		}

		const nextSquares=square.slice(); //The handleClick function creates a copy of the squares array (nextSquares) with the JavaScript slice() Array method. Then, handleClick updates the nextSquares array to add X to the first ([0] index) square.
		
		if (xIsNext){ 
			nextSquares[i] = 'X'
		} else {
			nextSquares[i] = 'O'
		}
		
		onPlay(nextSquares) // Now replace the setSquares and setXIsNext calls in handleClick in the Board component with a single call to your new onPlay function so the Game component can update the Board when the user clicks a square:

		// setSquares(nextSquares) // Calling the setSquares function lets React know the state of the component has changed. This will trigger a re-render of the components that use the squares state (Board) as well as its child components (the Square components that make up the board).

		setXIsNext(!xIsNext)
	}


	// calculating winning status - 
	const winner = calculateWinner(square)
	let status;
	if (winner){
		status = 'Winner: ' + winner
	} else {
		status = 'Next player: ' + (xIsNext ? 'X' : 'O')
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


// calculating winner - 

function calculateWinner(squares) {
	const lines = [
	  [0, 1, 2],
	  [3, 4, 5],
	  [6, 7, 8],
	  [0, 3, 6],
	  [1, 4, 7],
	  [2, 5, 8],
	  [0, 4, 8],
	  [2, 4, 6]
	];
	for (let i = 0; i < lines.length; i++) {
	  const [a, b, c] = lines[i];
	  if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
		return squares[a];
	  }
	}
	return null;
  }


  // rendering game component for time-travelling

export default function Game(){ //export default here will make the Game component as the top component. But for that, you'll have to remove it from the above Board component.
	
	const [xIsNext, setXIsNext] = useState(true)
	const [history, setHistory] = useState([Array(9).fill(null)]) //Notice how [Array(9).fill(null)] is an array with a single item, which itself is an array of 9 nulls.
	const currentSquares = history[history.length - 1] // To render the squares for the current move, you’ll want to read the last squares array from the history. You don’t need useState for this—you already have enough information to calculate it during rendering:

	//Next, create a handlePlay function inside the Game component that will be called by the Board component to update the game. Pass xIsNext, currentSquares and handlePlay as props to the Board component:


	//The handlePlay function needs to update Game’s state to trigger a re-render, but you don’t have a setSquares function that you can call any more—you’re now using the history state variable to store this information. You’ll want to update history by appending the updated squares array as a new history entry. You also want to toggle xIsNext, just as Board used to do:

	function handlePlay(nextSquares){
		setHistory([...history, nextSquares])
		setXIsNext(!xIsNext)
	}

	return (
		<div className="game">
			<div className="game-board">
				<Board xIsNext={xIsNext} square={currentSquares} onPlay={handlePlay} />
			</div>
			<div className="game-info">
				<ol>{ /*TODO*/}</ol>
			</div>
		</div>
	)
}