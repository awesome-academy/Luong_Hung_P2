import { combineReducers } from 'redux';
import ui from './ui';
import currentUser from './currentUser';

const rootReducer = combineReducers({
  ui,
  currentUser,
});

export default rootReducer;