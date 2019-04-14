import React from 'react';
import {App} from './App.js';
import {shallow} from 'enzyme'
import roster from './roster.js'
import Container from './App.js'
import configureMockStore from 'redux-mock-store';
import { Provider } from 'react-redux'
import Lineup from './lineupClass.js'

const testFile = '\n0:00\t\tEnd of 1st half\t49 - 21\t\n2nd Half\ntime\tteam\tPLAY\tSCORE\n20:00\t\tJump Ball won by Wake Forest\t49 - 21\t'
const mockStore = configureMockStore();
let lineup = new Lineup([
  'Brandon Childress',
  'Sharone Wright',
  'Chaundee Brown',
  'Jaylen Hoard',
  'Olivier Sarr'],1200,1);

  lineup.firstHalfArray = [1200,0];
  lineup.secondHalfArray = [1200,0]

const props = {
  removePlayer: jest.fn(),
  addPlayer: jest.fn(),
  updateTime: jest.fn(),
  addLineup: jest.fn(),
  addTimeToLineup: jest.fn(),
  changeIndex: jest.fn(),
  changeHalf: jest.fn(),
  updatePlayByPlay: jest.fn(),
  currentLineup: [
    'Brandon Childress',
    'Sharone Wright',
    'Chaundee Brown',
    'Jaylen Hoard',
    'Olivier Sarr'],
  time: '2000',
  lineupArray: [lineup],
  lineupIndex: 0,
  half: 1,
  playByPlay: '',
}

const store = mockStore(props);

describe('App Component',()=>{
  let wrapper;
  beforeEach(()=>{
    wrapper = shallow(<App {...props}/>)
  });

  it('renders without crashing', () => {
    expect(wrapper.find('div.App')).toBeDefined();
  })
  it('renders all 5 names',()=>{
    expect(wrapper.find('NamePlate').length).toEqual(5);
  })
  it('renders the correct time and half',()=>{
    expect(wrapper.find('div.time').find('input').props().value).toEqual('2000')
    expect(wrapper.find('div.time').text()).toContain('Half: 1')
  })
  it('displays all the players not in the game in the player bank',()=>{
    expect(wrapper.find('div.playerBank').find('button').length)
    .toEqual(roster.length-5);
  })
  it('renders all the results buttons',()=>{
    expect(wrapper.find('div.resultsButtonContainer').find('button').length)
    .toEqual(4)
  })
  it('renders the play by play box',()=>{
    expect(wrapper.find('div.right').find('textarea').length).toEqual(1);
  })
  it('triggers the add Player function',()=>{
    wrapper.setProps({currentLineup: ['']});
    wrapper.find('div.playerBank').find('button').first().simulate('click',{target:{id:'Test'}});
    expect(props.addPlayer).toHaveBeenCalled();
  })
  it('triggers the remove Player function',()=>{
    wrapper.find('NamePlate').first().dive().find('button').simulate('click',{target:{id:'Test'}})
    expect(props.removePlayer).toHaveBeenCalled();
  })
  it('triggers the change time function',()=>{
    wrapper.find('div.time').find('input').simulate('change',{target:{value:'test'}});
    expect(props.updateTime).not.toHaveBeenCalled();
    wrapper.find('div.time').find('input').simulate('change',{target:{value:1}});
    expect(props.updateTime).toHaveBeenCalled();
  })
  it('triggers the end half function',()=>{
    wrapper.find('div.resultsButton').find('button').first().simulate('click');
    expect(props.addTimeToLineup).toHaveBeenCalled();
    expect(props.updateTime).toHaveBeenCalled();
    expect(props.changeHalf).toHaveBeenCalled();
  })
  it('triggers the submitLineup function',()=>{
    wrapper.setProps({lineupArray:[]})
    wrapper.find('button.lineupSubmit').simulate('click');
    expect(props.addLineup).toHaveBeenCalled();
  })
  it('submits the lineup when not the first lineup',()=>{
    wrapper.setProps({lineupArray:[{players: ['players']}], currentLineup: ['test']})
    wrapper.find('button.lineupSubmit').simulate('click');
    expect(props.addLineup).toHaveBeenCalled();
  })
  it('adds time to lineup if already exists',()=>{
    wrapper.setProps({lineupArray:[{players: ['players']}], currentLineup: ['players']})
    wrapper.find('button.lineupSubmit').simulate('click');
    expect(props.addTimeToLineup).toHaveBeenCalled();
  })
  it('runs the fixTime function',()=>{
    expect(wrapper.instance().fixTime('2000')).toEqual(1200);
    expect(wrapper.instance().fixTime('20')).toEqual(20);
    expect(wrapper.instance().fixTime('0')).toEqual(0);
  })
  it('runs the findLineup function with match',()=>{
    wrapper.setProps({lineupArray: [{players:['1','2','3','4','5']}]})
    expect(wrapper.instance().findLineup(['1','2','3','4','5'])).toEqual(0);
  })
  it('runs the findLineup function without match',()=>{
    expect(wrapper.instance().findLineup(['Test'])).toEqual(-1);
  })
  it('runs the stringIncludes function with match',()=>{
    expect(wrapper.instance().stringIncludes('Brandon Childress')).toEqual(true)
  })
  it('returns false for stringIncludes with no match',()=>{
    expect(wrapper.instance().stringIncludes('John Cena')).toEqual(false);
  })
  it('returns -1 for no match in findTimeGap',()=>{
    wrapper.setProps({lineupArray:[]});
    expect(wrapper.instance().findTimeGap(1200,1)).toEqual(-1);
  })
  it('returns the lineup index that was on the court for findTimeGap',()=>{
    wrapper.setProps({lineupArray: [{firstHalfArray:[1200,0]}]})
    expect(wrapper.instance().findTimeGap(500,1)).toEqual(0);
  })
  it('runs the changeHalf function',()=>{
    wrapper.find('div.resultsButton').find('button').at(1).simulate('click');
    expect(props.changeHalf).toHaveBeenCalled();
  })
  it('runs the test function',()=>{
    wrapper.setProps({lineupArray: [{players:['1','2','3','4','5'], firstHalfArray:[],
    secondHalfArray:[], playByPlay: '20:00\t \tJump Ball won by North Carolina'}]})
    wrapper.instance().test = jest.fn();
    wrapper.instance().forceUpdate();
    wrapper.find('div.resultsButton').find('button').last().simulate('click');
    expect(wrapper.instance().test).toHaveBeenCalled();
  })
  it('runs the parseData function',()=>{
    wrapper.setProps({playByPlay: testFile});
    expect(wrapper.instance().parseData()).toEqual(
      {
        firstHalfPlays:[
        {
          time: 0,
          details: 'End of 1st half'
        }],
      secondHalfPlays:[
        {
          time: 1200,
          details: 'Jump Ball won by Wake Forest'
        }]
      }
    )
  })
})
