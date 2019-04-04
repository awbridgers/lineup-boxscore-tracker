export const half = (state = 1, action) =>{
  switch (action.type){
    case 'CHANGE_HALF':
      return action.half;
    default:
      return state;
  }
}
