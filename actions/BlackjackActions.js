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

export const startBlackjackGame = (deck, playerCards, dealerCards) => ({
  type: START_BLACKJACK_GAME,
  deck,
  playerCards,
  dealerCards
});

export const getNewPlayerCard = (playerCards, deck) => ({
  type: GET_NEW_PLAYER_CARD,
  playerCards,
  deck
});

export const updatePlayerTotal = (playerTotal) => ({
  type: UPDATE_PLAYER_TOTAL,
  payload: playerTotal
});

export const updateDealerTotal = (dealerTotal) => ({
  type: UPDATE_DEALER_TOTAL,
  payload: dealerTotal
});
