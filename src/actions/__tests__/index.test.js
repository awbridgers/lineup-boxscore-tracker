import * as actions from '../index.js'
import Lineup from '../../lineupClass.js'

describe('actions',()=>{
  it('passes the right action for removing a player',()=>{
    expect(actions.removePlayer(1)).toEqual({type:'REMOVE_PLAYER', ID: 1})
  })
  it('passes the right action for adding a player',()=>{
    expect(actions.addPlayer('John Cena',69)).toEqual({type:'ADD_PLAYER', ID:69, name: 'John Cena'})
  })
  it('passes the right action for updating the time',()=>{
    expect(actions.updateTime(69)).toEqual({type:'UPDATE_TIME', newTime:69})
  })
  it('passes the right action for updating addLineup',()=>{
    expect(actions.addLineup(['1','2'])).toEqual({type: 'ADD_LINEUP', lineup: ['1','2']})
  })
  it('passes the right action for adding time to lineup',()=>{
    expect(actions.addTimeToLineup(69,69,69)).toEqual({
      type: 'ADD_TIME_TO_LINEUP',
      time: 69,
      index: 69,
      half: 69
    })
  })
  it('passes the right action for changing the index',()=>{
    expect(actions.changeIndex(69)).toEqual({type:'CHANGE_INDEX', index:69})
  })
  it('passes the right action for changing the half',()=>{
    expect(actions.changeHalf(69)).toEqual({type:'CHANGE_HALF', half: 69})
  })
  it('passes the right action for changing the play by play',()=>{
    expect(actions.updatePlayByPlay('test')).toEqual(
      {
        type: 'UPDATE_PLAY_BY_PLAY',
        text: 'test'
      }
    )
  })
  it('passes the right action for updating the lineup',()=>{
    expect(actions.updatePoints('ADD_FREE_THROW',0,true,false)).toEqual(
      {
        type: 'ADD_FREE_THROW',
        index:0,
        wakePlay: true,
        assisted: false
      }
    )
  })
  it('passes the right action for updating missed shots',()=>{
    expect(actions.updateMissedShots('ADD_MISSED_THREE',0,false)).toEqual({
      type: 'ADD_MISSED_THREE',
      index:0,
      wakePlay: false
    })
  })
  it('passes the right action for updating rebounds',()=>{
    expect(actions.updateRebound('ADD_OFFENSIVE_REBOUND',0,true)).toEqual(
      {
        type: 'ADD_OFFENSIVE_REBOUND',
        index: 0,
        wakePlay: true
      }
    )
  })
  it('passes the right action for updating turnovers',()=>{
    expect(actions.updateTurnovers(0,true)).toEqual(
      {
        type: 'ADD_TURNOVER',
        index: 0,
        wakePlay: true
      }
    )
  })
})
