export const playByPlay = (state = '', action) =>{
  switch(action.type){
    case 'UPDATE_PLAY_BY_PLAY':
      return action.text;
    default:
      return state;
  }
}
