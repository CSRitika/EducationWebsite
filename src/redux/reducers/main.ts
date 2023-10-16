// In main.js we combine all reducers of reducer.ts file inside single reducer and then this combine reducer store into Store.ts file

import { combineReducers } from 'redux';
import { cartReducer } from './reducer';

const rootReducer = combineReducers({
  cartReducer
});

export default rootReducer;