import { playByPlay } from '../playbyplay.js';


describe('playByPlay reducer',()=>{
  it('returns the default state',()=>{
    expect(playByPlay(undefined,{})).toEqual('');
  })
  it('updates when something is typed',()=>{
    expect(playByPlay('',{type:'UPDATE_PLAY_BY_PLAY', text:'No do you?'})).toEqual('No do you?')
  })
})
