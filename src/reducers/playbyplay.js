import {stateGame as testGame} from '../testFile.js';


export const playByPlay = (state = testGame, action) =>{
  switch(action.type){
    case 'UPDATE_PLAY_BY_PLAY':
      return action.text;
    default:
      return state;
  }
}
