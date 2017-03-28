import {
  GET_NEW_PLAYER_CARD,
  INITIALIZE_BLACKJACK_GAME,
  INITIALIZE_DECK,
  START_BLACKJACK_GAME,
  UPDATE_DEALER_TOTAL,
  UPDATE_PLAYER_TOTAL,
} from '../actions/types';

INITIAL_STATE = {
  gameStatus: 'new',
  deck: [],
  playerCards: [],
  playerTotal: 0,
  dealerCards: [],
  dealerTotal: 0,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case INITIALIZE_BLACKJACK_GAME:
      return {
        ...state,
        gameStatus: 'new',
        turn: 'player',
        playerCards: [],
        playerTotal: 0,
        dealerCards: [],
        dealerTotal: 0,
      };

    case INITIALIZE_DECK: {
      const deck = action.payload;
      return { ...state, deck };
    }

    case START_BLACKJACK_GAME: {
      const deck = state.deck;
      const playerCards = [];
      const dealerCards = [];
      playerCards.push(deck.pop());
      playerCards.push(deck.pop());
      dealerCards.push(deck.pop());
      dealerCards.push(deck.pop());
      return { ...state, gameStatus: 'play', turn: 'player', deck, playerCards, dealerCards };
    }

    case GET_NEW_PLAYER_CARD: {
      const deck = state.deck;
      const card = deck.pop();
      const playerCards = state.playerCards;
      playerCards.push(card);
      console.log('GNPC Reducer: ', playerCards);
      return { ...state, deck, playerCards };
    }

    case UPDATE_DEALER_TOTAL:
      return { ...state, dealerTotal: action.payload };

    case UPDATE_PLAYER_TOTAL:
      return { ...state, playerTotal: action.payload };

    default:
      return state;
  }
};
