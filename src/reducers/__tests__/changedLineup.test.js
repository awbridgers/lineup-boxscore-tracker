import { changedLineup } from '../changedLineup.js';



describe('changedLineup reducer',()=>{
  it('returns the default state',()=>{
    expect(changedLineup(undefined,{})).toEqual(false);
  })
  it('changes the value when action is called',()=>{
    expect(changedLineup(undefined,{
      type: 'LINEUP_CHANGE',
      bool: true
    })).toEqual(true)
    expect(changedLineup(undefined,{
      type: 'LINEUP_CHANGE',
      bool: false
    })).toEqual(false)
  })
})
