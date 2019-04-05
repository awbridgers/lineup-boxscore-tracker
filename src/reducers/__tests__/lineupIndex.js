import {lineupIndex} from '../lineupIndex.js';


describe('lineupIndex reducer',()=>{
  it('returns the initial state',()=>{
    expect(lineupIndex(undefined, {})).toEqual(0)
  });
  it('changes the lineupIndex',()=>{
    expect(lineupIndex(0,{type: 'CHANGE_INDEX', index: 69})).toEqual(69)
  })
})
