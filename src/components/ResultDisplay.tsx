import React from "react";
import { ResultDisplayProps, GameChoice, PlayerType } from "../App/types";
import { getResultMessage } from "../utils/gameLogic";
import playerRock from "../assets/pixelRock.png";
import playerScissors from "../assets/pixelScissors.png";
import player1Lizard from "../assets/pixelLizard One.png";
import player2Lizard from "../assets/pixelLizardTwo.png";
import player1Spock from "../assets/pixelSpock1.png";
import player2Spock from "../assets/pixelSpock2.png";
import playerPaper from "../assets/pixelPaper2.png";

const ResultDisplay: React.FC<ResultDisplayProps> = ({
  result,
  selections,
  playerNames,
  onNextRound,
}) => {
  const getChoiceImage = (
    choice: GameChoice,
    player: PlayerType
  ): JSX.Element => {
    const images = {
      playerOne: {
        rock: playerRock,
        paper: playerPaper,
        scissors: playerScissors,
        lizard: player1Lizard,
        spock: player1Spock,
      },
      playerTwo: {
        rock: playerRock,
        paper: playerPaper,
        scissors: playerScissors,
        lizard: player2Lizard,
        spock: player2Spock,
      },
    };

    return (
      <img
        src={images[player][choice]}
        alt={choice}
        className={`choice-image ${player}-${choice}`}
      />
    );
  };

  return (
    <div className="result-display">
      <h2>{getResultMessage(result, playerNames)}</h2>
      <div className="choices-display">
        <div>
          {selections.playerOne &&
            getChoiceImage(selections.playerOne, "playerOne")}
          <p>
            {playerNames.playerOne} chose {selections.playerOne}
          </p>
        </div>
        <div>
          {selections.playerTwo &&
            getChoiceImage(selections.playerTwo, "playerTwo")}
          <p>
            {playerNames.playerTwo} chose {selections.playerTwo}
          </p>
        </div>
      </div>
      <button onClick={onNextRound} className="next-round-btn">
        Next Round
      </button>
    </div>
  );
};

export default ResultDisplay;
