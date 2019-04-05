import { half } from '../half.js';

describe('half reducer',()=>{
  it('should return the initial state',()=>{
    expect(half(undefined,{})).toEqual(1);
  })
  it('should change the half on action',()=>{
    expect(half(1,{type:'CHANGE_HALF', half:2})).toEqual(2)
  })
})
