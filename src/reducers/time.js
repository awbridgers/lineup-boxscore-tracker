

export const time = (state = '2000', action)=>{
  switch(action.type){
    case 'UPDATE_TIME':
      return action.newTime;
    default:
      return state;
  }
}
