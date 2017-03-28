import {
  GET_NEW_PLAYER_CARD,
  INITIALIZE_BLACKJACK_GAME,
  START_BLACKJACK_GAME,
  UPDATE_DEALER_TOTAL,
  UPDATE_PLAYER_TOTAL,
} from './types';

export const initializeBlackjackGame = () => ({
  type: INITIALIZE_BLACKJACK_GAME
});

export const startBlackjackGame = () => ({
  type: START_BLACKJACK_GAME
});

export const updatePlayerTotal = (playerTotal) => ({
  type: UPDATE_PLAYER_TOTAL,
  payload: playerTotal
});

export const updateDealerTotal = (dealerTotal) => ({
  type: UPDATE_DEALER_TOTAL,
  payload: dealerTotal
});

export const getNewPlayerCard = () => ({
  type: GET_NEW_PLAYER_CARD
});
