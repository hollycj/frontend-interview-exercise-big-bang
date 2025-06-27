export type GameChoice = "rock" | "paper" | "scissors" | "lizard" | "spock";

export type PlayerType = "playerOne" | "playerTwo";

export interface GameResult {
  winner: PlayerType | null;
  resultType: "win" | "lose" | "draw";
}

export interface Selections {
  playerOne: GameChoice | null;
  playerTwo: GameChoice | null;
}

export interface Score {
  playerOne: number;
  playerTwo: number;
}

export interface PlayerNames {
  playerOne: string;
  playerTwo: string;
}

export interface GameAreaProps {
  playerNames: PlayerNames;
  onRoundComplete: (winner: PlayerType) => void;
}

export interface PlayerSelectionProps {
  player: PlayerType;
  choices: GameChoice[];
  onSelect: (player: PlayerType, choice: GameChoice) => void;
  selected: GameChoice | null;
  playerName: string;
  disabled?: boolean;
  isThinking?: boolean;
}

export interface ResultDisplayProps {
  result: GameResult;
  selections: Selections;
  playerNames: PlayerNames;
  onNextRound: () => void;
}

export interface ScoreboardProps {
  score: Score;
  playerNames: PlayerNames;
  username: string;
}

export interface SettingsModalProps {
  currentPlayerNames: PlayerNames;
  currentUsername: string;
  onSave: (names: PlayerNames) => void;
  onUsernameChange: (username: string) => void;
  onReset: () => void;
  onClose: () => void;
}

export interface GameRulesModalProps {
  onClose: () => void;
}
