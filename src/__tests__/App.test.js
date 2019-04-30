import React from 'react';
import {App} from '../App.js';
import ConnectedApp from '../App.js'
import {shallow} from 'enzyme'
import roster from '../roster.js'
import Container from '../App.js'
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux'
import Lineup from '../lineupClass.js'



const testFile = '\n0:00\t\tEnd of 1st half\t49 - 21\t\n2nd Half\ntime\tteam\tPLAY\tSCORE\n20:00\t\tJump Ball won by Wake Forest\t49 - 21\t'
const testFreeThrows = '\n5:00\t\tWake Forest made free throw\t49 - 21\t\n2nd Half\ntime\tteam\tPLAY\tSCORE\n5:00\t\tOpponent made free throw\t49 - 21\t';
const testThreePointers = '\n5:00\t\tWake Forest made three point\t49 - 21\t\n2nd Half\ntime\tteam\tPLAY\tSCORE\n5:00\t\tOpponent made three point\t49 - 21\t'
const testThreePointersA = '\n5:00\t\tWake Forest made three point assist\t49 - 21\t\n2nd Half\ntime\tteam\tPLAY\tSCORE\n5:00\t\tOpponent made three point assist\t49 - 21\t'
const testTwoPointers = '\n5:00\t\tWake Forest made jumper\t49 - 21\t\n2nd Half\ntime\tteam\tPLAY\tSCORE\n5:00\t\tOpponent made dunk\t49 - 21\t'
const testTwoPointersA = '\n5:00\t\tWake Forest made jumper assist\t49 - 21\t\n2nd Half\ntime\tteam\tPLAY\tSCORE\n5:00\t\tOpponent made layup assist\t49 - 21\t'
const testFreeThrowsMiss = '\n5:00\t\tWake Forest missed free throw\t49 - 21\t\n2nd Half\ntime\tteam\tPLAY\tSCORE\n5:00\t\tOpponent missed free throw\t49 - 21\t'
const testThreePointersMiss = '\n5:00\t\tWake Forest missed three point\t49 - 21\t\n2nd Half\ntime\tteam\tPLAY\tSCORE\n5:00\t\tOpponent missed three point\t49 - 21\t'
const testTwoPointersMiss = '\n5:00\t\tWake Forest missed jumper\t49 - 21\t\n2nd Half\ntime\tteam\tPLAY\tSCORE\n5:00\t\tOpponent missed dunk\t49 - 21\t'
const testDRebounds = '\n5:00\t\tWake Forest defensive rebound\t49 - 21\t\n2nd Half\ntime\tteam\tPLAY\tSCORE\n5:00\t\tOpponent defensive rebound\t49 - 21\t'
const testORebounds = '\n5:00\t\tWake Forest offensive rebound\t49 - 21\t\n2nd Half\ntime\tteam\tPLAY\tSCORE\n5:00\t\tOpponent offensive rebound\t49 - 21\t'
const testTurnvoers = '\n5:00\t\tWake Forest turnover\t49 - 21\t\n2nd Half\ntime\tteam\tPLAY\tSCORE\n5:00\t\tOpponent turnover\t49 - 21\t'


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

const props = {
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


describe('App Component',()=>{
  let wrapper;
  beforeEach(()=>{
    jest.clearAllMocks();
    wrapper = shallow(<App {...props}/>)
  });
  it('renders',()=>{
    expect(wrapper).toBeDefinded
  })
  it('does not add player when theres no opening',()=>{
    wrapper.find('div.playerBank').find('button').first()
    .simulate('click',{target: {id:'Test'}});
    expect(props.addPlayer).not.toHaveBeenCalled();
  })
  it('adds a player when there is an opening',()=>{
    wrapper.setProps({currentLineup:[
      '',
      'Sharone Wright',
      'Chaundee Brown',
      'Jaylen Hoard',
      'Olivier Sarr']})
    wrapper.find('div.playerBank').find('button').first()
    .simulate('click',{target: {id:'New Player'}});
    expect(props.addPlayer).toHaveBeenCalled();
  })
  it('removes a player',()=>{
    wrapper.find('NamePlate').first().dive().find('button').
    simulate('click',{target:{id:'Test Player'}})
    expect(props.removePlayer).toHaveBeenCalled();
    expect(props.lineupChanged).toHaveBeenCalled();
  })
  it('runs the changeTime function if value is number',()=>{
    wrapper.find('div.time').find('input')
    .simulate('change',{target:{value: 1}})
    expect(props.updateTime).toHaveBeenCalled();
  })
  it('does not run changeTime if input is not a number',()=>{
      wrapper.find('div.time').find('input')
      .simulate('change',{target:{value: 'text'}})
      expect(props.updateTime).not.toHaveBeenCalled();
  })
  it('runs the changeHalf function',()=>{
    wrapper.find('div.resultsButton').find('button').at(1).simulate('click');
    expect(props.changeHalf).toHaveBeenCalled();
  })
  it('runs the endHalf funtion',()=>{
    wrapper.find('div.resultsButton').find('button').at(0).simulate('click');
    expect(props.addTimeToLineup).toHaveBeenCalled();
    expect(props.updateTime).toHaveBeenCalled();
    expect(props.changeHalf).toHaveBeenCalled();
  })
  it('submits a lineup if its the first lineup of the game',()=>{
    wrapper.setProps({lineupArray: []})
    wrapper.find('div.lineupButtons').find('button').first().simulate('click');
    expect(props.addLineup).toHaveBeenCalled();
  })
  it('submits a lineup if its not the first lineup, but is a new lineup',()=>{
    wrapper.setProps({currentLineup: [
      'Brandon Childress',
      'Chaundee Brown',
      'Ikenna Smart',
      'Jaylen Hoard',
      'Olivier Sarr'
    ]});
    wrapper.find('div.lineupButtons').find('button').first().simulate('click');
    expect(props.addLineup).toHaveBeenCalled();
    expect(props.addTimeToLineup).toHaveBeenCalled();
    expect(props.changeIndex).toHaveBeenCalledWith(2);
    expect(props.lineupChanged).toHaveBeenCalled();
  })
  it('handles lineupSubmit if the lineup already exists with time 2000',()=>{
    wrapper.find('div.lineupButtons').find('button').first().simulate('click');
    expect(props.addTimeToLineup).toHaveBeenCalledTimes(1);
    expect(props.changeIndex).toHaveBeenCalled();
    expect(props.lineupChanged).toHaveBeenCalled();
  })
  it('handles lineupSubmit if the lineup already exists with time 0',()=>{
    wrapper.setProps({time:'0'})
    wrapper.find('div.lineupButtons').find('button').first().simulate('click');
    expect(props.addTimeToLineup).toHaveBeenCalledTimes(1);
    expect(props.changeIndex).toHaveBeenCalled();
    expect(props.lineupChanged).toHaveBeenCalled();
  })
  it('handles lineupSubmit if already exists with time not 0 or 2000',()=>{
    wrapper.setProps({time: '1234'})
    wrapper.find('div.lineupButtons').find('button').first().simulate('click');
    expect(props.addTimeToLineup).toHaveBeenCalledTimes(2);
    expect(props.changeIndex).toHaveBeenCalled();
    expect(props.lineupChanged).toHaveBeenCalled();
  })
  it('sets the lineupChange back to false when submitted',()=>{
    wrapper.find('div.lineupButtons').find('button').first().simulate('click');
    expect(props.lineupChanged).toHaveBeenCalled();
  })
  it('fixTime returns the time in seconds',()=>{
    expect(wrapper.instance().fixTime("0")).toEqual(0);
    expect(wrapper.instance().fixTime('45')).toEqual(45);
    expect(wrapper.instance().fixTime('130')).toEqual(90);
  })
  it('getTime returns the total time',()=>{
    expect(wrapper.instance().getTime(props.lineupArray[0])).toEqual(1200);
  })
  it('finds the lineup in the game at a certain time',()=>{
    expect(wrapper.instance().findLineup(props.currentLineup.sort())).toEqual(0);
    expect(wrapper.instance().findLineup(['test','lineup'])).toEqual(-1);
  })
  it('updates the playByPlay text accordingly',()=>{
    wrapper.find('textarea').simulate('change',{target:{value: 'Test'}});
    expect(props.updatePlayByPlay).toHaveBeenCalled();
  })
  it('returns if the string in playByPlay includes a wake forest players',()=>{
    expect(wrapper.instance().stringIncludes('Wake Forest')).toEqual(true);
    expect(wrapper.instance().stringIncludes('Hello There')).toEqual(false);
    expect(wrapper.instance().stringIncludes('Brandon Childress')).toEqual(true);
    expect(wrapper.instance().stringIncludes('Kyle Guy')).toEqual(false);
  })
  it('returns the lineup index that was on the court at a specific time',()=>{
    expect(wrapper.instance().findTimeGap(500,1)).toEqual(0);
    expect(wrapper.instance().findTimeGap(500,2)).toEqual(1);
    expect(wrapper.instance().findTimeGap(-5,1)).toEqual(-1);
    expect(wrapper.instance().findTimeGap(-5,2)).toEqual(-1);
  })
  it('runs the parseData function',()=>{
    wrapper.setProps({playByPlay: testFile});
    expect(wrapper.instance().parseData()).toEqual({
      firstHalfPlays:[{time: 0, details: 'End of 1st half'}],
      secondHalfPlays:[{time: 1200, details: 'Jump Ball won by Wake Forest'}]
    })
    wrapper.setProps({playByPlay: '\n0:00\t\tEnd of 1st half\t49 - 21\t'});
    expect(wrapper.instance().parseData()).toEqual({
      firstHalfPlays:[{time:0, details: 'End of 1st half'}],
      secondHalfPlays: []
    })
  })
  it('adds a made free throw for both teams',()=>{
    wrapper.setProps({playByPlay: testFreeThrows})
    wrapper.find('div.resultsButton').find('button').at(3).simulate('click');
    expect(props.updatePoints).toHaveBeenNthCalledWith(1,'ADD_FREE_THROW',0,true,false);
    expect(props.updatePoints).toHaveBeenNthCalledWith(2, 'ADD_FREE_THROW',1,false, false);
  })
  it('adds a three pointer for both teams,w/o assist',()=>{
    wrapper.setProps({playByPlay: testThreePointers});
    wrapper.find('div.resultsButton').find('button').at(3).simulate('click');
    expect(props.updatePoints).toHaveBeenNthCalledWith(1,'ADD_THREE_POINTER',0,true,false);
    expect(props.updatePoints).toHaveBeenNthCalledWith(2,'ADD_THREE_POINTER',1,false,false);
  })
  it('adds a three pointer for both teams with an assist',()=>{
    wrapper.setProps({playByPlay: testThreePointersA});
    wrapper.find('div.resultsButton').find('button').at(3).simulate('click');
    expect(props.updatePoints).toHaveBeenNthCalledWith(1,'ADD_THREE_POINTER',0,true,true);
    expect(props.updatePoints).toHaveBeenNthCalledWith(2,'ADD_THREE_POINTER',1,false,true);
  })
  it('adds a two pointer for both teams w/o assis',()=>{
    wrapper.setProps({playByPlay: testTwoPointers});
    wrapper.find('div.resultsButton').find('button').at(3).simulate('click');
    expect(props.updatePoints).toHaveBeenNthCalledWith(1,'ADD_TWO_POINTER',0,true,false);
    expect(props.updatePoints).toHaveBeenNthCalledWith(2,'ADD_TWO_POINTER',1,false,false);
  })
  it('adds a two pointer for both teams with assist',()=>{
    wrapper.setProps({playByPlay: testTwoPointersA});
    wrapper.find('div.resultsButton').find('button').at(3).simulate('click');
    expect(props.updatePoints).toHaveBeenNthCalledWith(1,'ADD_TWO_POINTER',0,true,true);
    expect(props.updatePoints).toHaveBeenNthCalledWith(2,'ADD_TWO_POINTER',1,false,true);
  })
  it('adds a missed free throw for both teams',()=>{
    wrapper.setProps({playByPlay: testFreeThrowsMiss});
    wrapper.find('div.resultsButton').find('button').at(3).simulate('click');
    expect(props.missedFreeThrow).toHaveBeenNthCalledWith(1,0,true);
    expect(props.missedFreeThrow).toHaveBeenNthCalledWith(2,1,false);
  })
  it('adds a missed three pointer for both teams',()=>{
    wrapper.setProps({playByPlay: testThreePointersMiss});
    wrapper.find('div.resultsButton').find('button').at(3).simulate('click');
    expect(props.updateMissedShots).toHaveBeenNthCalledWith(1,'ADD_MISSED_THREE_POINTER',0,true);
    expect(props.updateMissedShots).toHaveBeenNthCalledWith(2,'ADD_MISSED_THREE_POINTER',1,false);
  })
  it('adds a missed two pointer for both teams',()=>{
    wrapper.setProps({playByPlay: testTwoPointersMiss});
    wrapper.find('div.resultsButton').find('button').at(3).simulate('click');
    expect(props.updateMissedShots).toHaveBeenNthCalledWith(1,'ADD_MISSED_TWO_POINTER',0,true);
    expect(props.updateMissedShots).toHaveBeenNthCalledWith(2,'ADD_MISSED_TWO_POINTER',1,false);
  })
  it('adds a defensive rebound for both teams',()=>{
    wrapper.setProps({playByPlay: testDRebounds});
    wrapper.find('div.resultsButton').find('button').at(3).simulate('click');
    expect(props.updateRebounds).toHaveBeenNthCalledWith(1,'ADD_DEFENSIVE_REBOUND',0,true);
    expect(props.updateRebounds).toHaveBeenNthCalledWith(2,'ADD_DEFENSIVE_REBOUND',1,false);
  })
  it('adds an offensive rebound for both teams',()=>{
    wrapper.setProps({playByPlay: testORebounds});
    wrapper.find('div.resultsButton').find('button').at(3).simulate('click');
    expect(props.updateRebounds).toHaveBeenNthCalledWith(1,'ADD_OFFENSIVE_REBOUND',0,true);
    expect(props.updateRebounds).toHaveBeenNthCalledWith(2,'ADD_OFFENSIVE_REBOUND',1,false);
  })
  it('adds a turnover for both teams',()=>{
    wrapper.setProps({playByPlay: testTurnvoers});
    wrapper.find('div.resultsButton').find('button').at(3).simulate('click');
    expect(props.updateTurnovers).toHaveBeenNthCalledWith(1,0,true);
    expect(props.updateTurnovers).toHaveBeenNthCalledWith(2,1,false);
  })
  it('runs the uploadLineup function',()=>{
    window.confirm = jest.fn(()=>true);

    wrapper.find('Uploader').dive().find('input').simulate('change',{
      target:{
        files:[new Blob(['some','stuff'])]
      }
    });
    expect(window.confirm).toHaveBeenCalled();
  })
  it('shows the Results container if showResults true',()=>{
    wrapper.setProps({showResults: true});
    expect(wrapper.find('Results')).toBeDefined();
  })
  it('does not show results if false',()=>{
    expect(wrapper.find('div.App')).toBeDefined();
  })
})
