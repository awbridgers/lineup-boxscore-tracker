import {UNCgame} from '../testFile.js';


export const playByPlay = (state = UNCgame, action) =>{
  switch(action.type){
    case 'UPDATE_PLAY_BY_PLAY':
      return action.text;
    default:
      return state;
  }
}
