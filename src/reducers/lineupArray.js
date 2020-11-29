//for testing purposes
import Lineup from '../lineupClass.js'
let testLineup = new Lineup([
  'Ian DuBose',
  'Jalen Johnson',
  'Daivien Williamson',
  'Isaiah Mucius',
  'Ismael Massoud'],1200,1);
  testLineup.firstHalfArray = [1200,0];
  testLineup.secondHalfArray = [1200,0];




export const lineupArray = (state = [], action) => {
  switch(action.type){
    case 'ADD_LINEUP':
      let newArray = state.slice();
      newArray.push(action.lineup);
      return newArray;
    case 'UPLOAD_LINEUP':
      return action.array
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
      case 'ADD_FREE_THROW':
        const pointsKey = (action.wakePlay) ? 'pointsFor' : 'pointsAgainst'
        const freeThrowKey = (action.wakePlay) ? 'FTAfor' : 'FTAagainst'
        return state.map((lineup,index)=>{
          if(index !== action.index){
            return lineup;
          }
          return {...lineup, [pointsKey]: lineup[pointsKey] + 1, [freeThrowKey]: lineup[freeThrowKey] + 1}
        })
        case 'ADD_THREE_POINTER':
          const threePointsKey = (action.wakePlay) ? 'pointsFor' : 'pointsAgainst';
          const threeShotKey = (action.wakePlay) ? 'madeThreesFor' : 'madeThreesAgainst';
          const threeAssistKey = (action.wakePlay) ? 'assistsFor' : 'assistsAgainst';
          const threeAssistIncrement = (action.assisted) ? 1 : 0
          return state.map((lineup,index)=>{
            if(index !== action.index){
              return lineup;
            }
            return {...lineup, [threePointsKey]: lineup[threePointsKey] + 3,
              [threeShotKey]: lineup[threeShotKey] + 1,
              [threeAssistKey]: lineup[threeAssistKey] + threeAssistIncrement}
          })
          case 'ADD_TWO_POINTER':
            const twoPointsKey = (action.wakePlay) ? 'pointsFor' : 'pointsAgainst';
            const twoShotKey = (action.wakePlay) ? 'madeTwosFor' : 'madeTwosAgainst'
            const twoAssistKey = (action.wakePlay) ? 'assistsFor' : 'assistsAgainst';
            const twoassistIncrement = (action.assisted) ? 1 : 0
            return state.map((lineup,index)=>{
              if(index !== action.index){
                return lineup;
              }
              return {...lineup, [twoPointsKey]: lineup[twoPointsKey] + 2,
                [twoShotKey]: lineup[twoShotKey] + 1,
                [twoAssistKey]: lineup[twoAssistKey] + twoassistIncrement}
            })
          case 'ADD_MISSED_TWO_POINTER':
            const missedTwoKey = (action.wakePlay) ? 'missedTwosFor':'missedTwosAgainst'
            return state.map((lineup,index)=>{
              if(index !== action.index){
                return lineup
              }
              return {...lineup, [missedTwoKey]: lineup[missedTwoKey] + 1};
            })
            case 'ADD_MISSED_THREE_POINTER':
              const missedThreeKey = (action.wakePlay)? 'missedThreesFor':'missedThreesAgainst';
              return state.map((lineup,index)=>{
                if(index !== action.index){
                  return lineup;
                }
                return {...lineup, [missedThreeKey]: lineup[missedThreeKey] + 1}
              })
            case 'ADD_MISSED_FREE_THROW':
              const missedFTKey = (action.wakePlay)? 'FTAfor':'FTAagainst';
              return state.map((lineup,index)=>{
                if(index !== action.index){
                  return lineup;
                }
                return {...lineup, [missedFTKey]: lineup[missedFTKey] + 1}
              })
          case 'ADD_OFFENSIVE_REBOUND':
            const oRebKey = (action.wakePlay) ? 'oRebFor' : 'oRebAgainst';
            return state.map((lineup,index)=>{
              if(index !== action.index){
                return lineup;
              }
              return {...lineup, [oRebKey]:lineup[oRebKey] + 1}
            })
            case 'ADD_DEFENSIVE_REBOUND':
              const dRebKey = (action.wakePlay) ? 'dRebFor' : 'dRebAgainst';
              return state.map((lineup,index)=>{
                if(index !== action.index){
                  return lineup;
                }
                return {...lineup, [dRebKey]:lineup[dRebKey] + 1}
              })
            case 'ADD_TURNOVER':
              const turnoverKey = (action.wakePlay) ? 'turnoversFor' : 'turnoversAgainst'
              return state.map((lineup,index)=>{
                if(index !== action.index){
                  return lineup
                }
                return {...lineup, [turnoverKey]:lineup[turnoverKey] + 1}
              })
    default:
      return state;
  }
}
