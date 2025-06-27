import { Score, PlayerNames } from "../App/types";
import { DEFAULT_PLAYER_NAMES, STORAGE_KEYS } from "./constants";

export const loadScore = (): Score => {
  try {
    return (
      JSON.parse(localStorage.getItem(STORAGE_KEYS.SCORE)!) || {
        playerOne: 0,
        playerTwo: 0,
      }
    );
  } catch (error) {
    console.error("Failed to load score:", error);
    return {
      playerOne: 0,
      playerTwo: 0,
    };
  }
};

export const saveScore = (score: Score): void => {
  try {
    localStorage.setItem(STORAGE_KEYS.SCORE, JSON.stringify(score));
  } catch (error) {
    console.error("Failed to save score:", error);
  }
};

export const loadPlayerNames = (): PlayerNames => {
  try {
    return (
      JSON.parse(localStorage.getItem(STORAGE_KEYS.PLAYERS)!) ||
      DEFAULT_PLAYER_NAMES
    );
  } catch (error) {
    console.error("Failed to load player names:", error);
    return DEFAULT_PLAYER_NAMES;
  }
};

export const savePlayerNames = (playerNames: PlayerNames): void => {
  try {
    localStorage.setItem(STORAGE_KEYS.PLAYERS, JSON.stringify(playerNames));
  } catch (error) {
    console.error("Failed to save player names:", error);
  }
};

export const loadUsername = (): string => {
  try {
    return localStorage.getItem(STORAGE_KEYS.USERNAME) || "";
  } catch (error) {
    console.error("Failed to load username:", error);
    return "";
  }
};

export const saveUsername = (username: string): void => {
  try {
    localStorage.setItem(STORAGE_KEYS.USERNAME, username);
  } catch (error) {
    console.error("Failed to save username:", error);
  }
};

export const resetGameStorage = (): void => {
  try {
    localStorage.removeItem(STORAGE_KEYS.SCORE);
    localStorage.removeItem(STORAGE_KEYS.PLAYERS);
    localStorage.removeItem(STORAGE_KEYS.USERNAME);
  } catch (error) {
    console.error("Failed to reset game storage:", error);
  }
};
