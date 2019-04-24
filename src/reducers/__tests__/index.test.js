import { createStore } from 'redux';
import rootReducer from '../index.js';
import { currentLineup } from '../currentLineup.js';


describe('rootReducer',()=>{
  it('creates a reducer with the root',()=>{
    let store = createStore(rootReducer);
    expect(store.getState().currentLineup).toEqual(currentLineup(undefined,{}));
  })
})
