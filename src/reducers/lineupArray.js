//for testing purposes
import Lineup from '../lineupClass.js'
let testLineup = new Lineup([
  'Brandon Childress',
  'Sharone Wright',
  'Chaundee Brown',
  'Jaylen Hoard',
  'Olivier Sarr'],1200,1);
  testLineup.firstHalfArray = [1200,0];
  testLineup.secondHalfArray = [1200,0];




export const lineupArray = (state = [testLineup], action) => {
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
