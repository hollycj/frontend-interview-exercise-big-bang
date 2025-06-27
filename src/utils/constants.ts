import { GameChoice, PlayerNames } from "../App/types";

export const GAME_CHOICES: GameChoice[] = [
  "rock",
  "paper",
  "scissors",
  "lizard",
  "spock",
];

export const DEFAULT_PLAYER_NAMES: PlayerNames = {
  playerOne: "Player 1",
  playerTwo: "Computer",
};

export const WINNING_RULES: Record<GameChoice, GameChoice[]> = {
  scissors: ["paper", "lizard"],
  paper: ["rock", "spock"],
  rock: ["scissors", "lizard"],
  lizard: ["paper", "spock"],
  spock: ["scissors", "rock"],
};

export const STORAGE_KEYS = {
  SCORE: "rpsls-score",
  PLAYERS: "rpsls-players",
  USERNAME: "rpsls-username",
};
