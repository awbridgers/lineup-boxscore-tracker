import { combineReducers } from 'redux';
import { player1, player2, player3, player4, player5 } from './currentLineup.js';
import { time } from './time.js';
import { lineupArray } from './lineupArray.js'
import { reducer as formReducer} from 'redux-form';


const rootReducer = combineReducers({
  player1,
  player2,
  player3,
  player4,
  player5,
  time,
  lineupArray,
});


export default rootReducer;
