import { combineReducers } from 'redux';
import BlackJackReducer from './BlackJackReducer';

export default combineReducers({
  blackjack: BlackJackReducer,
});
