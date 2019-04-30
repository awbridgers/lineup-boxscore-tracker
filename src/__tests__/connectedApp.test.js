import React from 'react';
import ConnectedApp from '../App.js';
import { mapStateToProps, mapDispatchToProps} from '../App.js'
import Lineup from '../lineupClass.js'

let firstHalfLineup = new Lineup([
  'Brandon Childress',
  'Sharone Wright',
  'Chaundee Brown',
  'Jaylen Hoard',
  'Olivier Sarr'].sort(),1200,1);
let secondHalfLineup = new Lineup([
  'Brandon Childress',
  'Sharone Wright',
  'Chaundee Brown',
  'Jaylen Hoard',
  'Ikenna Smart'
].sort(),1200,1)

firstHalfLineup.firstHalfArray = [1200,0];
secondHalfLineup.secondHalfArray = [1200,0];

const store = {
  removePlayer: jest.fn(),
  addPlayer: jest.fn(),
  updateTime: jest.fn(),
  addLineup: jest.fn(),
  addTimeToLineup: jest.fn(),
  changeIndex: jest.fn(),
  importLineup: jest.fn(),
  changeHalf: jest.fn(),
  updatePlayByPlay: jest.fn(),
  lineupChanged: jest.fn(),
  updatePoints: jest.fn(),
  updateMissedShots: jest.fn(),
  updateRebounds: jest.fn(),
  updateTurnovers: jest.fn(),
  missedFreeThrow: jest.fn(),
  currentLineup: [
    'Brandon Childress',
    'Sharone Wright',
    'Chaundee Brown',
    'Jaylen Hoard',
    'Olivier Sarr'],
  time: '2000',
  lineupArray: [firstHalfLineup, secondHalfLineup],
  lineupIndex: 0,
  half: 1,
  playByPlay: '',
  showResults: false,
  changedLineup: false
}

describe('connected App component',()=>{
  beforeEach(()=>{
    jest.clearAllMocks();
  })
  it('connects the state to props',()=>{
    expect(mapStateToProps(store).currentLineup).toEqual([
      'Brandon Childress',
      'Sharone Wright',
      'Chaundee Brown',
      'Jaylen Hoard',
      'Olivier Sarr'
    ])
    expect(mapStateToProps(store).time).toEqual('2000');
    expect(mapStateToProps(store).lineupArray).toEqual(
      [firstHalfLineup,
      secondHalfLineup
    ])
    expect(mapStateToProps(store).lineupIndex).toEqual(0);
    expect(mapStateToProps(store).half).toEqual(1);
    expect(mapStateToProps(store).playByPlay).toEqual('');
    expect(mapStateToProps(store).showResults).toEqual(false);
    expect(mapStateToProps(store).changedLineup).toEqual(false);
  })
  it('matches dispatch to props',()=>{
    const dispatch = jest.fn();
    mapDispatchToProps(dispatch).removePlayer(1);
    mapDispatchToProps(dispatch).addPlayer('name',1);
    mapDispatchToProps(dispatch).updateTime('50');
    mapDispatchToProps(dispatch).addTimeToLineup(1200, 0 , 1);
    mapDispatchToProps(dispatch).changeIndex(1);
    mapDispatchToProps(dispatch).changeHalf(2);
    mapDispatchToProps(dispatch).updatePlayByPlay('test');
    mapDispatchToProps(dispatch).updatePoints('ADD_FREE_THROW',0,true,false);
    mapDispatchToProps(dispatch).updateMissedShots('ADD_MISSED_TWO_POINTER',0,true,false);
    mapDispatchToProps(dispatch).updateRebounds('ADD_DEFENSIVE_REBOUND',0,true);
    mapDispatchToProps(dispatch).updateTurnovers(0,true);
    mapDispatchToProps(dispatch).changeResults();
    mapDispatchToProps(dispatch).missedFreeThrow(0,true);
    mapDispatchToProps(dispatch).lineupChanged(true);
    mapDispatchToProps(dispatch).importLineup(['test']);
    mapDispatchToProps(dispatch).addLineup(firstHalfLineup);
    expect(dispatch.mock.calls[0][0]).toEqual({type:'REMOVE_PLAYER', ID:1})
    expect(dispatch.mock.calls[1][0]).toEqual({type:'ADD_PLAYER',name:'name', ID:1});
    expect(dispatch.mock.calls[2][0]).toEqual({type:'UPDATE_TIME', newTime:'50'});
    expect(dispatch.mock.calls[3][0]).toEqual({
      type:'ADD_TIME_TO_LINEUP',
      time:1200,
      index:0 ,
      half:1
    });
    expect(dispatch.mock.calls[4][0]).toEqual({type:'CHANGE_INDEX', index:1});
    expect(dispatch.mock.calls[5][0]).toEqual({type:'CHANGE_HALF', half:2});
    expect(dispatch.mock.calls[6][0]).toEqual({type:'UPDATE_PLAY_BY_PLAY', text:'test'});
    expect(dispatch.mock.calls[7][0]).toEqual({
      type:'ADD_FREE_THROW',
      index:0,
      wakePlay: true,
      assisted: false
    });
    expect(dispatch.mock.calls[8][0]).toEqual({
      type:'ADD_MISSED_TWO_POINTER',
      index: 0,
      wakePlay: true
    });
    expect(dispatch.mock.calls[9][0]).toEqual({
      type:'ADD_DEFENSIVE_REBOUND',
      wakePlay:true,
      index: 0,
    });
    expect(dispatch.mock.calls[10][0]).toEqual({
      type:'ADD_TURNOVER',
      wakePlay: true,
      index:0
    });
    expect(dispatch.mock.calls[11][0]).toEqual({
      type:'CHANGE_SHOW_RESULTS',
    });
    expect(dispatch.mock.calls[12][0]).toEqual({
      type:'ADD_MISSED_FREE_THROW',
      index:0,
      wakePlay: true
    });
    expect(dispatch.mock.calls[13][0]).toEqual({
      type:'LINEUP_CHANGE',
      bool:true});

    expect(dispatch.mock.calls[14][0]).toEqual({
      type:'UPLOAD_LINEUP',
      array:['test']
    });
    expect(dispatch.mock.calls[15][0]).toEqual({
      type:'ADD_LINEUP',
      lineup: firstHalfLineup
    })
  })
})
