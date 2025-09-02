import GameBoard from "@/components/GameBoard";
import GameStatus from "@/components/GameStatus";
import { useTicTacToe } from "@/hooks/useTicTacToe";

const TicTacToe = () => {
  const {
    board,
    currentPlayer,
    winner,
    isDraw,
    isGameOver,
    scores,
    makeMove,
    resetGame,
    resetScores
  } = useTicTacToe();

  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            Tic Tac Toe
          </h1>
        </div>

        {/* Game Board */}
        <div className="mb-8">
          <GameBoard 
            board={board}
            onCellClick={makeMove}
            isGameOver={isGameOver}
          />
        </div>

        {/* Game Status */}
        <div className="max-w-md mx-auto">
          <GameStatus
            currentPlayer={currentPlayer}
            winner={winner}
            isDraw={isDraw}
            isGameOver={isGameOver}
            scores={scores}
            onResetGame={resetGame}
            onResetScores={resetScores}
          />
        </div>
      </div>
    </div>
  );
};

export default TicTacToe;