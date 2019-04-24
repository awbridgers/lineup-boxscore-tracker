import store from '../store.js'


describe('the Store',()=>{
  it('creates a store',()=>{
    expect(store.getState().time).toEqual('2000')
  })
})
