import React from "react";
import { ScoreboardProps } from "../App/types";

const Scoreboard: React.FC<ScoreboardProps> = ({
  score,
  playerNames,
  username,
}) => {
  return (
    <div className="scoreboard">
      <h2>Score</h2>
      {username && <p className="username-display">Playing as: {username}</p>}
      <div className="scores-container">
        <div className="player-score">
          <h3>{playerNames.playerOne}</h3>
          <div className="score-value">{score.playerOne}</div>
        </div>
        <div className="vs-separator">VS</div>
        <div className="player-score">
          <h3>{playerNames.playerTwo}</h3>
          <div className="score-value">{score.playerTwo}</div>
        </div>
      </div>
    </div>
  );
};

export default Scoreboard;
