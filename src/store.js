import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers/index.js'



const store = createStore(
  rootReducer,
  undefined,composeWithDevTools());

export default store;
