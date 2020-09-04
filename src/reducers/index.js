import { combineReducers } from 'redux';
import ui from './ui';
import currentUser from './currentUser';
import sliderBar from './sliderbar';
import movies from './movies';
import promotionReducer from './promotion'
const rootReducer = combineReducers({
  ui,
  currentUser,
  sliderBar,
  movies,
  promotionReducer,
});

export default rootReducer;