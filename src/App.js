// useState: tic tac toe
// http://localhost:3000/isolated/exercise/04.js

import { Box, Button, ChakraProvider, Flex, Text, VStack } from '@chakra-ui/react';
import * as React from 'react';

function Board() {
  const squares = Array(9).fill(null);

  function selectSquare(square) { }

  function restart() { }

  function renderSquare(i) {
    return (
      <Button
        size="lg"
        variant="outline"
        borderWidth="2px"
        borderColor="gray.300"
        onClick={() => selectSquare(i)}
      >
        {squares[i]}
      </Button>

    );
  }

  return (
    <VStack mt={4}>
      <Text fontSize="2xl" fontWeight="bold" mb={6}>
        STATUS
      </Text>
      <Flex >
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </Flex>
      <Flex >
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </Flex>
      <Flex >
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </Flex>
      <Button size="md" onClick={restart} mt={4} colorScheme="teal">
        restart
      </Button>
    </VStack>
  );

}

function Game() {
  return (
    <Box bg="gray.100" minH="100vh" p={10}>
      <Box maxW="md" mx="auto" bg="white" p={6} borderRadius="lg">
        <Board />
      </Box>
    </Box>
  );
}

// eslint-disable-next-line no-unused-vars
function calculateStatus(winner, squares, nextValue) {
  return winner
    ? `Winner: ${winner}`
    : squares.every(Boolean)
      ? `Scratch: Cat's game`
      : `Next player: ${nextValue}`;
}

// eslint-disable-next-line no-unused-vars
function calculateNextValue(squares) {
  return squares.filter(Boolean).length % 2 === 0 ? 'X' : 'O';
}

// eslint-disable-next-line no-unused-vars
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
  return (
    <ChakraProvider>

      <Game />
    </ChakraProvider>
  );

}

export default App;
