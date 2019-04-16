export const showResults = (state = false, action) =>{
  switch(action.type){
    case 'CHANGE_SHOW_RESULTS':
      return !state;
    default:
      return state
  }
}
