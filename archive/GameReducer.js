import {
  GET_NEW_PLAYER_CARD,
  INCREMENT_PLAYER_TOTAL,
  GET_NEW_CARD,
  INITIALIZE_DECK,
  INITIALIZE_GAME,
  START_NEW_ROUND,
  UPDATE_DEALER_TOTAL,
  UPDATE_GAME_STATUS,
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

    case INCREMENT_PLAYER_TOTAL:
      return { ...state, playerTotal: action.payload };

    case UPDATE_GAME_STATUS:
      return { ...state, gameStatus: action.payload };

    case GET_NEW_PLAYER_CARD: {
      const deck = state.deck;
      const card = deck.pop();
      const playerCards = action.payload;
      playerCards.push(card);
      return { ...state, deck, playerCards };
    }

    case GET_NEW_CARD: {
      // console.log('GET_NEW_CARD');
      const { prop } = action.payload;
      const deck = state.deck;
      const card = deck.pop();
      const playerCards = state.playerCards;
      playerCards.push(card);
      return { ...state, deck, [prop]: playerCards };
      // return { ...state };
    }

    case START_NEW_ROUND: {
      const deck = state.deck;
      const playerCards = [];
      const dealerCards = [];
      playerCards.push(deck.pop());
      playerCards.push(deck.pop());
      dealerCards.push(deck.pop());
      dealerCards.push(deck.pop());
      return { ...state, deck, playerCards, dealerCards };
    }


    case INITIALIZE_DECK:
      return { ...state, deck: action.payload };

    case INITIALIZE_GAME:
      return { ...state, INITIAL_STATE };

    case UPDATE_DEALER_TOTAL:
      return { ...state, dealerTotal: action.payload };

    case UPDATE_PLAYER_TOTAL:
      return { ...state, dealerTotal: action.payload };

    default:
      return state;
  }
};
