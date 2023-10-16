// Data we get from Store so that
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './redux/reducers/main';

const store = configureStore({
  reducer: rootReducer,
});


export default store;
// Now we will provide store to global component so that we can get its value from any component