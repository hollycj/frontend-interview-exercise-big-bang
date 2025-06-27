import React from "react";

interface GameRulesModalProps {
  onClose: () => void;
}

const GameRulesModal: React.FC<GameRulesModalProps> = ({ onClose }) => {
  return (
    <div className="modal-overlay">
      <div
        className="rules-modal"
        role="dialog"
        aria-labelledby="rules-modal-title"
      >
        <div className="modal-header">
          <h2 id="rules-modal-title">How to Play</h2>
          <button
            onClick={onClose}
            className="close-btn"
            aria-label="Close rules"
          >
            &times;
          </button>
        </div>

        <div className="rules-content">
          <h3>Game Rules:</h3>
          <ul>
            <li>✊ Rock crushes ✌️ scissors and 🤏 lizard</li>
            <li>✋ Paper covers ✊ rock and disproves 🖖 Spock</li>
            <li>✌️ Scissors cuts ✋ paper and decapitates 🤏 lizard</li>
            <li>🤏 Lizard poisons 🖖 Spock and eats ✋ paper</li>
            <li>🖖 Spock smashes ✌️ scissors and vaporizes ✊ rock</li>
          </ul>

          <h3>How to Win:</h3>
          <p>
            Select your choice and the computer will randomly select its choice.
            The winner is determined by the rules above.
          </p>
        </div>

        <button onClick={onClose} className="close-rules-btn">
          Got it!
        </button>
      </div>
    </div>
  );
};

export default GameRulesModal;
