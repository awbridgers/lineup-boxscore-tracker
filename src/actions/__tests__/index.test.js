import { removePlayer, addPlayer, updateTime, addLineup, addTimeToLineup } from '../index.js';
import { changeIndex, changeHalf, updatePlayByPlay } from '../index.js';

describe('actions',()=>{
  it('passes the right action for removing a player',()=>{
    expect(removePlayer(1)).toEqual({type:'REMOVE_PLAYER', ID: 1})
  })
  it('passes the right action for adding a player',()=>{
    expect(addPlayer('John Cena',69)).toEqual({type:'ADD_PLAYER', ID:69, name: 'John Cena'})
  })
  it('passes the right action for updating the time',()=>{
    expect(updateTime(69)).toEqual({type:'UPDATE_TIME', newTime:69})
  })
  it('passes the right action for updating addLineup',()=>{
    expect(addLineup(['1','2'])).toEqual({type: 'ADD_LINEUP', lineup: ['1','2']})
  })
  it('passes the right action for adding time to lineup',()=>{
    expect(addTimeToLineup(69,69,69)).toEqual({
      type: 'ADD_TIME_TO_LINEUP',
      time: 69,
      index: 69,
      half: 69
    })
  })
  it('passes the right action for changing the index',()=>{
    expect(changeIndex(69)).toEqual({type:'CHANGE_INDEX', index:69})
  })
  it('passes the right action for changing the half',()=>{
    expect(changeHalf(69)).toEqual({type:'CHANGE_HALF', half: 69})
  })
  it('passes the right action for changing the play by play',()=>{
    expect(updatePlayByPlay('test')).toEqual(
      {
        type: 'UPDATE_PLAY_BY_PLAY',
        text: 'test'
      }
    )
  })
})
