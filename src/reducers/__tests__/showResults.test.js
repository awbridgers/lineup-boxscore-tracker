import { showResults } from '../showResults.js';

describe('showResults reducer',()=>{
  it('returns the default state',()=>{
    expect(showResults(undefined,{})).toEqual(false)
  })
  it('toggles showResults',()=>{
    expect(showResults(false,{type:'CHANGE_SHOW_RESULTS'})).toEqual(true);
  })
})
