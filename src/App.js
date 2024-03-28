import React, { useState } from 'react';
import { Button, Flex, Heading } from '@chakra-ui/react';

function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [nextValue, setNextValue] = useState('X');

  function selectSquare(square) {
    if (calculateWinner(squares) || squares[square]) {
      return;
    }
    const newSquares = [...squares];
    newSquares[square] = nextValue;
    setSquares(newSquares);
    setNextValue(calculateNextValue(newSquares));
  }

  function restart() {
    setSquares(Array(9).fill(null));
    setNextValue('X');
  }

  function renderSquare(i) {
    return (
      <Button className="square" onClick={() => selectSquare(i)} size="md" m={1}>
        {squares[i]}
      </Button>
    );
  }

  const winner = calculateWinner(squares);
  const status = calculateStatus(winner, squares, nextValue);

  return (
    <Flex direction="column" alignItems="center">
      <Heading as="h2" size="lg" mb={4}>
        {status}
      </Heading>
      <Flex>
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </Flex>
      <Flex>
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </Flex>
      <Flex>
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </Flex>
      <Button onClick={restart} mt={4}>
        Restart
      </Button>
    </Flex>
  );
}

function Game() {
  return (
    <Flex justify="center" align="center" height="100vh">
      <Board />
    </Flex>
  );
}

function calculateStatus(winner, squares, nextValue) {
  return winner
    ? `Winner: ${winner}`
    : squares.every(Boolean)
      ? `Scratch: Cat's game`
      : `Next player: ${nextValue}`;
}

function calculateNextValue(squares) {
  return squares.filter(Boolean).length % 2 === 0 ? 'X' : 'O';
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

function App() {
  return <Game />;
}

export default App;
