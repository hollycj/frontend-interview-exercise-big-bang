import React, { useState } from "react";
import { Score, PlayerNames, PlayerType } from "./types";
import {
  loadScore,
  loadPlayerNames,
  loadUsername,
  savePlayerNames,
  saveUsername,
  resetGameStorage,
  saveScore,
} from "../utils/storage";
import { DEFAULT_PLAYER_NAMES } from "../utils/constants";
import GameArea from "../components/GameArea";
import Scoreboard from "../components/Scoreboard";
import SettingsModal from "../components/SettingsModal";
import GameRulesModal from "../components/GameRulesModal";
import "./App.css";
import "../index.css";

const App: React.FC = () => {
  const [score, setScore] = useState<Score>(loadScore());
  const [playerNames, setPlayerNames] = useState<PlayerNames>(
    loadPlayerNames()
  );
  const [username, setUsername] = useState<string>(loadUsername());
  const [showSettings, setShowSettings] = useState<boolean>(false);
  const [showRules, setShowRules] = useState<boolean>(false);
  const [gameKey, setGameKey] = useState<number>(Date.now());

  const resetGame = (): void => {
    resetGameStorage();
    setScore(loadScore());
    setPlayerNames(DEFAULT_PLAYER_NAMES);
    setUsername("");
    setGameKey(Date.now());
  };

  const updatePlayerNames = (newPlayerNames: PlayerNames): void => {
    savePlayerNames(newPlayerNames);
    setPlayerNames(newPlayerNames);
  };

  const updateUsername = (newUsername: string): void => {
    saveUsername(newUsername);
    setUsername(newUsername);
  };

  const updateScore = (winner: PlayerType): void => {
    const newScore = { ...score };
    newScore[winner]++;
    saveScore(newScore);
    setScore(newScore);
  };

  return (
    <div className="app-container" key={gameKey}>
      <header className="app-header">
        <h1>Rock Paper Scissors Lizard Spock</h1>
        {username && <p className="welcome-message">Welcome, {username}!</p>}
      </header>

      <div className="action-buttons">
        <button
          onClick={() => setShowSettings(true)}
          aria-label="Open settings"
        >
          Settings
        </button>
        <button onClick={() => setShowRules(true)} aria-label="View game rules">
          How to Play
        </button>
      </div>

      <Scoreboard score={score} playerNames={playerNames} username={username} />

      <GameArea playerNames={playerNames} onRoundComplete={updateScore} />

      {showSettings && (
        <SettingsModal
          currentPlayerNames={playerNames}
          currentUsername={username}
          onSave={updatePlayerNames}
          onUsernameChange={updateUsername}
          onReset={resetGame}
          onClose={() => setShowSettings(false)}
        />
      )}

      {showRules && <GameRulesModal onClose={() => setShowRules(false)} />}
    </div>
  );
};

export default App;
