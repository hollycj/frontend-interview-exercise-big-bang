import React, { useState } from "react";
import { SettingsModalProps } from "../App/types";

const SettingsModal: React.FC<SettingsModalProps> = ({
  currentPlayerNames,
  currentUsername,
  onSave,
  onUsernameChange,
  onReset,
  onClose,
}) => {
  const [playerOneName, setPlayerOneName] = useState<string>(
    currentPlayerNames.playerOne
  );
  const [playerTwoName, setPlayerTwoName] = useState<string>(
    currentPlayerNames.playerTwo
  );
  const [username, setUsername] = useState<string>(currentUsername);

  const handleSubmit = (e: React.FormEvent): void => {
    e.preventDefault();
    onSave({ playerOne: playerOneName, playerTwo: playerTwoName });
    onUsernameChange(username);
    onClose();
  };

  return (
    <div className="modal-overlay">
      <div
        className="settings-modal"
        role="dialog"
        aria-labelledby="settings-modal-title"
      >
        <div className="modal-header">
          <h2 id="settings-modal-title">Game Settings</h2>
          <button
            onClick={onClose}
            className="close-btn"
            aria-label="Close settings"
          >
            &times;
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Your Username:</label>
            <input
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              maxLength={20}
            />
          </div>

          <div className="form-group">
            <label htmlFor="playerOne">Player 1 Name:</label>
            <input
              id="playerOne"
              type="text"
              value={playerOneName}
              onChange={(e) => setPlayerOneName(e.target.value)}
              maxLength={20}
            />
          </div>

          <div className="form-group">
            <label htmlFor="playerTwo">Player 2 (Computer) Name:</label>
            <input
              id="playerTwo"
              type="text"
              value={playerTwoName}
              onChange={(e) => setPlayerTwoName(e.target.value)}
              maxLength={20}
            />
          </div>

          <div className="modal-actions">
            <button type="submit" className="save-btn">
              Save Changes
            </button>
            <button
              type="button"
              className="reset-btn"
              onClick={() => {
                if (
                  window.confirm(
                    "Are you sure you want to reset all game data?"
                  )
                ) {
                  onReset();
                  onClose();
                }
              }}
            >
              Reset Game
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SettingsModal;
