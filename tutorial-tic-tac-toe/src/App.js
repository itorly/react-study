import { useState } from 'react';

export default function Game() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  // Before you can implement the jumpTo function, 
  // you need the Game component to keep track of which step the user is currently viewing. 
  // To do this, define a new state variable called currentMove, defaulting to 0:
  const [currentMove, setCurrentMove] = useState(0);
  const xIsNext = currentMove % 2 === 0;
  // modify the Game component to render the currently selected move
  const currentSquares = history[currentMove];

  // the Game’s handlePlay function is called when you click on a square.

  // make two changes to the Game’s handlePlay function:
  // 1.If you “go back in time” and then make a new move from that point, 
  // you only want to keep the history up to that point. 
  // Instead of adding nextSquares after all items (... spread syntax) in history, 
  // you’ll add it after all items in history.slice(0, currentMove + 1) so that you’re only keeping that portion of the old history.
  // 2.Each time a move is made, you need to update currentMove to point to the latest history entry.
  function handlePlay(nextSquares) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  function jumpTo(nextMove) {
    setCurrentMove(nextMove);
  }

  // As you iterate through the history array inside the function you passed to map, 
  // the squares argument goes through each element of history, 
  // and the move argument goes through each array index: 0, 1, 2, ...
  const moves = history.map((squares, move) => {
    let description;
    if (move > 0) {
      description = 'Go to move #' + move;
    } else {
      description = 'Go to game start';
    }
    return (
      // add the key as <li key={move}>
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{description}</button>
      </li>
    );
  });

  return (
    <div className="game">
      <div className="game-board">
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </div>
      <div className="game-info">
        <ol>{moves}</ol>
      </div>
    </div>
  );
}

function Square({ value, onSquareClick }) {
  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
}

function Board({ xIsNext, squares, onPlay }) {

  function handleClick(i) {
    if (squares[i] || calculateWinner(squares)) {
      return;
    }
    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }
    // replace the setSquares and setXIsNext calls in handleClick in the Board component with a single call to your new onPlay function 
    // so the Game component can update the Board when the user clicks a square
    onPlay(nextSquares);
  }

  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next player: " + (xIsNext ? "X" : "O");
  }

  // When you were passing onSquareClick={handleClick}, you were passing the handleClick function down as a prop.
  // When you were passing onSquareClick={handleClick(0)}, you were calling that function right away—notice the parentheses in handleClick(0)—and that’s why it runs too early.

  // call handleClick until the user clicks:
  // () => handleClick(0) is an arrow function, which is a shorter way to define functions. 
  // When the square is clicked, the code after the => “arrow” will run, calling handleClick(0).
  return (
    <>
      <div className="status">{status}</div>
      <div className="board-row">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </>
  );

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
}
