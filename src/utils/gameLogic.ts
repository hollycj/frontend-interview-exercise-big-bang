import { GameChoice, PlayerType, GameResult, PlayerNames } from "../App/types";
import { GAME_CHOICES, WINNING_RULES } from "./constants";

export const getGameChoices = (): GameChoice[] => Object.values(GAME_CHOICES);

export const determineWinner = (
  playerOneChoice: GameChoice,
  playerTwoChoice: GameChoice
): GameResult => {
  if (!playerOneChoice || !playerTwoChoice) {
    throw new Error("Both players must make a choice");
  }

  if (playerOneChoice === playerTwoChoice) {
    return { winner: null, resultType: "draw" };
  }

  if (WINNING_RULES[playerOneChoice].includes(playerTwoChoice)) {
    return { winner: "playerOne", resultType: "win" };
  }

  return { winner: "playerTwo", resultType: "lose" };
};

export const getResultMessage = (
  result: GameResult,
  playerNames: PlayerNames
): string => {
  if (result.winner === null) return "It's a draw!";
  return `${playerNames[result.winner]} wins!`;
};
