import { time } from '../time.js'

describe('time reducer',()=>{
  it('returns the intial state',()=>{
    expect(time(undefined,{})).toEqual('2000');
  });
  it('changes the time',()=>{
    expect(time('2000',{type: 'UPDATE_TIME', newTime:'69'})).toEqual('69')
  })
})
