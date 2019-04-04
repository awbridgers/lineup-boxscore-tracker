import { combineReducers } from 'redux';
import { currentLineup } from './currentLineup.js';
import { time } from './time.js';
import { lineupArray } from './lineupArray.js';
import { lineupIndex } from './lineupIndex.js';
import { half } from './half.js'


const rootReducer = combineReducers({
  currentLineup,
  lineupArray,
  time,
  lineupIndex,
  half,
});


export default rootReducer;
