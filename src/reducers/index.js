import { combineReducers } from 'redux';
import { player1, player2, player3, player4, player5 } from './currentLineup.js';


const rootReducer = combineReducers({
  player1,
  player2,
  player3,
  player4,
  player5
});


export default rootReducer;
