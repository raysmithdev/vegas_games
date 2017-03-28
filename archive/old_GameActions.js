import { Actions } from 'react-native-router-flux';

import {
  INCREMENT_PLAYER_TOTAL,
  GET_NEW_PLAYER_CARD,
  GET_NEW_CARD,
  START_NEW_ROUND,
  UPDATE_DEALER_TOTAL,
  UPDATE_PLAYER_TOTAL,
} from './types';



export const getNewCard = ({ prop }) => {
  return {
    type: GET_NEW_CARD,
    payload: { prop }
  };
};

export const getNewPlayerCard = (playerCards) => ({
  type: GET_NEW_PLAYER_CARD,
  payload: playerCards
});

export const startNewRound = () => ({
  type: START_NEW_ROUND
});

export const updateDealerTotal = (dealerTotal) => ({
  type: UPDATE_DEALER_TOTAL,
  payload: dealerTotal
});

export const updateGameStatus = (gameStatus) => ({
  type: UPDATE_GAME_STATUS,
  payload: gameStatus
});

export const updatePlayerTotal = (playerTotal) => ({
  type: UPDATE_PLAYER_TOTAL,
  payload: playerTotal
});

export const incrementPlayerTotal = (playerTotal) => ({
  type: INCREMENT_PLAYER_TOTAL,
  payload: playerTotal
});
