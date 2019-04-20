export const changedLineup = (state = false, action)=>{
  switch(action.type){
    case 'LINEUP_CHANGE':
      return action.bool;
    default:
      return state
  }
}
