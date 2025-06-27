import React, { useState, useEffect } from "react";
import {
  GameAreaProps,
  Selections,
  PlayerType,
  GameChoice,
  GameResult,
} from "../App/types";
import { determineWinner, getGameChoices } from "../utils/gameLogic";
import PlayerSelection from "./PlayerSelection";
import ResultDisplay from "./ResultDisplay";

const GameArea: React.FC<GameAreaProps> = ({
  playerNames,
  onRoundComplete,
}) => {
  const [selections, setSelections] = useState<Selections>({
    playerOne: null,
    playerTwo: null,
  });
  const [result, setResult] = useState<GameResult | null>(null);
  const [isComputerPlaying, setIsComputerPlaying] = useState<boolean>(false);
  const choices = getGameChoices();

  const makeComputerChoice = (): void => {
    setIsComputerPlaying(true);
    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * choices.length);
      handleSelection("playerTwo", choices[randomIndex]);
      setIsComputerPlaying(false);
    }, 800);
  };

  const handleSelection = (player: PlayerType, choice: GameChoice): void => {
    setSelections((prev) => ({ ...prev, [player]: choice }));
  };

  const resetRound = (): void => {
    setSelections({
      playerOne: null,
      playerTwo: null,
    });
    setResult(null);
  };

  useEffect(() => {
    if (selections.playerOne && !selections.playerTwo) {
      makeComputerChoice();
    }
  }, [selections.playerOne]);

  useEffect(() => {
    if (selections.playerOne && selections.playerTwo) {
      const gameResult = determineWinner(
        selections.playerOne,
        selections.playerTwo
      );
      setResult(gameResult);
      if (gameResult.winner) {
        onRoundComplete(gameResult.winner);
      }
    }
  }, [selections]);

  return (
    <div className="game-area">
      <PlayerSelection
        player="playerOne"
        choices={choices}
        onSelect={handleSelection}
        selected={selections.playerOne}
        playerName={playerNames.playerOne}
        disabled={!!selections.playerOne}
      />

      <PlayerSelection
        player="playerTwo"
        choices={choices}
        onSelect={handleSelection}
        selected={selections.playerTwo}
        playerName={playerNames.playerTwo}
        disabled={true}
        isThinking={isComputerPlaying}
      />

      {result && (
        <ResultDisplay
          result={result}
          selections={selections}
          playerNames={playerNames}
          onNextRound={resetRound}
        />
      )}
    </div>
  );
};

export default GameArea;
