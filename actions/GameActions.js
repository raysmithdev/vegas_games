import {
  GET_NEW_CARD,
  INITIALIZE_DECK,
} from './types';

export const initializeDeck = (numberOfDecks = 1) => dispatch => {
  const cards = ['A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K'];
  const suites = ['Spades', 'Clubs', 'Hearts', 'Diamonds'];
  let deck = [];
  let value = 0;
  for (let d = 0; d < numberOfDecks; d++) {
    for (let s = 0; s < suites.length; s++) {
      for (let c = 0; c < cards.length; c++) {
        if (cards[c] === 'J' || cards[c] === 'Q' || cards[c] === 'K') {
          value = 10;
        } else if (cards[c] === 'A') {
          value = 1;
        } else {
          value = cards[c];
        }
        deck.push({ card: cards[c], suite: suites[s], value });
      }
    }
  }
  deck = deck.sort((a, b) => { return 0.5 - Math.random(); });
  dispatch({ type: INITIALIZE_DECK, payload: deck });
  // Actions.playGame({ type: 'reset' });
};

export const getNewCard = () => {
  return {
    type: GET_NEW_CARD
  };
};
