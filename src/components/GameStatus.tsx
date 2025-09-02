import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

type Player = 'X' | 'O';

interface GameStatusProps {
  currentPlayer: Player;
  winner: Player | null;
  isDraw: boolean;
  isGameOver: boolean;
  scores: { X: number; O: number; draws: number };
  onResetGame: () => void;
  onResetScores: () => void;
}

const GameStatus = ({
  currentPlayer,
  winner,
  isDraw,
  isGameOver,
  scores,
  onResetGame,
  onResetScores
}: GameStatusProps) => {
  const getStatusMessage = () => {
    if (winner) {
      return (
        <span className="text-lg font-semibold">
          🎉 Player <span className={winner === 'X' ? 'text-brand-primary' : 'text-brand-secondary'}>{winner}</span> wins!
        </span>
      );
    }
    if (isDraw) {
      return <span className="text-lg font-semibold text-brand-accent">🤝 It's a draw!</span>;
    }
    return (
      <span className="text-lg">
        Player <span className={currentPlayer === 'X' ? 'text-brand-primary' : 'text-brand-secondary'}>{currentPlayer}</span>'s turn
      </span>
    );
  };

  return (
    <div className="space-y-6">
      {/* Status Message */}
      <div className="text-center">
        {getStatusMessage()}
      </div>

      {/* Scores */}
      <Card className="bg-gradient-card border-border/50 shadow-card">
        <CardContent className="p-4">
          <h3 className="text-lg font-semibold text-center mb-3">Score</h3>
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <div className="text-2xl font-bold text-brand-primary">{scores.X}</div>
              <div className="text-sm text-muted-foreground">Player X</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-brand-accent">{scores.draws}</div>
              <div className="text-sm text-muted-foreground">Draws</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-brand-secondary">{scores.O}</div>
              <div className="text-sm text-muted-foreground">Player O</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Game Controls */}
      <div className="flex gap-2 justify-center">
        <Button 
          onClick={onResetGame}
          variant="outline"
          className="hover:bg-brand-primary/10 hover:border-brand-primary/50"
        >
          New Game
        </Button>
        <Button 
          onClick={onResetScores}
          variant="outline"
          className="hover:bg-brand-secondary/10 hover:border-brand-secondary/50"
        >
          Reset Scores
        </Button>
      </div>
    </div>
  );
};

export default GameStatus;