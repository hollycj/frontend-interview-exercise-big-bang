import React from "react";
import { PlayerSelectionProps, GameChoice } from "../App/types";

const PlayerSelection: React.FC<PlayerSelectionProps> = ({
  player,
  choices,
  onSelect,
  selected,
  playerName,
  disabled = false,
  isThinking = false,
}) => {
  const getChoiceIcon = (choice: GameChoice): string => {
    switch (choice) {
      case "rock":
        return "✊";
      case "paper":
        return "✋";
      case "scissors":
        return "✌️";
      case "lizard":
        return "🤏";
      case "spock":
        return "🖖";
      default:
        return "";
    }
  };

  return (
    <div className={`player-selection ${player}`}>
      <h2 className="player-name">{playerName}</h2>

      {isThinking ? (
        <div className="thinking-animation">Thinking...</div>
      ) : (
        <div className="choices-grid">
          {choices.map((choice) => (
            <button
              key={choice}
              onClick={() => onSelect(player, choice)}
              className={`choice-btn ${selected === choice ? "selected" : ""}`}
              disabled={disabled}
              aria-label={`Select ${choice}`}
              data-testid={`${player}-${choice}`}
            >
              <div className="choice-icon">{getChoiceIcon(choice)}</div>
              <span className="choice-label">{choice}</span>
            </button>
          ))}
        </div>
      )}

      {selected && (
        <div className="selected-choice" aria-live="polite">
          Selected: <strong>{selected}</strong>
        </div>
      )}
    </div>
  );
};

export default PlayerSelection;
