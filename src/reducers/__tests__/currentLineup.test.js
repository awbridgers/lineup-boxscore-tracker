import { currentLineup } from '../currentLineup.js';

describe('currentLineup Reducer', ()=>{
  const defaultArray = ['Brandon Childress','Sharone Wright','Chaundee Brown','Jaylen Hoard','Olivier Sarr']
  it('should return the initial state', ()=>{
    expect(currentLineup(undefined,{})).toEqual(defaultArray)
  })
  it('should remove player at specific index',()=>{
    expect(currentLineup(undefined,{type:'REMOVE_PLAYER', ID:0})).toEqual([
      '',
      'Sharone Wright',
      'Chaundee Brown',
      'Jaylen Hoard',
      'Olivier Sarr'
    ])
  })
  it('should add player at specific index',()=>{
    expect(currentLineup(['Brandon Childress','','Chaundee Brown','Jaylen Hoard','Olivier Sarr'],{
      type: 'ADD_PLAYER', ID: 1, name: 'Sharone Wright'})).toEqual(defaultArray);
  })
})
