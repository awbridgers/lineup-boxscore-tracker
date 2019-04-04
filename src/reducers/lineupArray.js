export const lineupArray = (state = [], action) => {
  switch(action.type){
    case 'ADD_LINEUP':
      let newArray = state.slice();
      newArray.push(action.lineup);
      return newArray;
    case 'ADD_TIME_TO_LINEUP':
      return state.map((lineup, index)=>{
        if(index !== action.index){
          return lineup
        }
        else{
          let whichArray = (action.half === 1) ? 'firstHalfArray' : 'secondHalfArray';
          let timeArray = lineup[whichArray].slice();
          timeArray.push(action.time);
          return {...lineup, [whichArray]: timeArray}
        }
      })
    default:
      return state;
  }
}
