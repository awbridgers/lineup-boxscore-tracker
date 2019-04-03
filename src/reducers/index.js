import { combineReducers } from 'redux';
import { currentLineup } from './currentLineup.js';
import { time } from './time.js';
import { lineupArray } from './lineupArray.js'
import { reducer as formReducer} from 'redux-form';


const rootReducer = combineReducers({
  currentLineup,
  lineupArray,
});


export default rootReducer;
