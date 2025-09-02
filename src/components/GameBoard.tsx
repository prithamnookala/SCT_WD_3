import { Button } from "@/components/ui/button";

type Player = 'X' | 'O';
type Cell = Player | null;

interface GameBoardProps {
  board: Cell[];
  onCellClick: (index: number) => void;
  isGameOver: boolean;
}

const GameBoard = ({ board, onCellClick, isGameOver }: GameBoardProps) => {
  return (
    <div className="grid grid-cols-3 gap-2 w-fit mx-auto">
      {board.map((cell, index) => (
        <Button
          key={index}
          variant="game"
          size="game"
          onClick={() => onCellClick(index)}
          disabled={cell !== null || isGameOver}
          className="transition-all duration-200 hover:scale-105"
        >
          <span className={`text-2xl font-bold transition-all duration-300 ${
            cell === 'X' ? 'text-brand-primary animate-pulse-once' : 
            cell === 'O' ? 'text-brand-secondary animate-pulse-once' : ''
          }`}>
            {cell}
          </span>
        </Button>
      ))}
    </div>
  );
};

export default GameBoard;