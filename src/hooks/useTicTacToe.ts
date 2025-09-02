import { useState, useCallback } from 'react';

type Player = 'X' | 'O';
type Cell = Player | null;
type Board = Cell[];

interface GameState {
  board: Board;
  currentPlayer: Player;
  winner: Player | null;
  isDraw: boolean;
  isGameOver: boolean;
  scores: { X: number; O: number; draws: number };
}

const WINNING_COMBINATIONS = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
  [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
  [0, 4, 8], [2, 4, 6] // diagonals
];

const checkWinner = (board: Board): Player | null => {
  for (const combination of WINNING_COMBINATIONS) {
    const [a, b, c] = combination;
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return board[a] as Player;
    }
  }
  return null;
};

const checkDraw = (board: Board): boolean => {
  return board.every(cell => cell !== null);
};

export const useTicTacToe = () => {
  const [gameState, setGameState] = useState<GameState>({
    board: Array(9).fill(null),
    currentPlayer: 'X',
    winner: null,
    isDraw: false,
    isGameOver: false,
    scores: { X: 0, O: 0, draws: 0 }
  });

  const makeMove = useCallback((index: number) => {
    const { board, currentPlayer, isGameOver } = gameState;
    
    if (isGameOver || board[index]) return;

    const newBoard = [...board];
    newBoard[index] = currentPlayer;

    const winner = checkWinner(newBoard);
    const isDraw = !winner && checkDraw(newBoard);
    const gameOver = !!(winner || isDraw);

    setGameState(prev => ({
      ...prev,
      board: newBoard,
      currentPlayer: currentPlayer === 'X' ? 'O' : 'X',
      winner,
      isDraw,
      isGameOver: gameOver,
      scores: winner 
        ? { ...prev.scores, [winner]: prev.scores[winner] + 1 }
        : isDraw 
        ? { ...prev.scores, draws: prev.scores.draws + 1 }
        : prev.scores
    }));
  }, [gameState]);

  const resetGame = useCallback(() => {
    setGameState(prev => ({
      ...prev,
      board: Array(9).fill(null),
      currentPlayer: 'X',
      winner: null,
      isDraw: false,
      isGameOver: false
    }));
  }, []);

  const resetScores = useCallback(() => {
    setGameState(prev => ({
      ...prev,
      scores: { X: 0, O: 0, draws: 0 }
    }));
  }, []);

  return {
    ...gameState,
    makeMove,
    resetGame,
    resetScores
  };
};