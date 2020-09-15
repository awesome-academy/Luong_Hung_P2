import { combineReducers } from 'redux';
import ui from './ui';
import currentUser from './currentUser';
import sliderBar from './sliderbar';
import movies from './movies';
import promotionReducer from './promotion';
import bookingTimeReducer from './bookingTime';
import theaterReducer from './theaters'
import branchReducer from './branchs'
import admin from "./admin";
import tickets from "./tickets";
import userReducer from './users'
import movieTypeReducer from './movieType'
import saveBookingReducer from './saveBooking'
import search from './search';
import seatReducer from './seats'
import points from "./point"

const rootReducer = combineReducers({
  ui,
  currentUser,
  sliderBar,
  movies,
  bookingTimeReducer,
  promotionReducer,
  theaterReducer,
  branchReducer,
  admin,
  tickets,
  movieTypeReducer,
  userReducer,
  saveBookingReducer,
  search,
  seatReducer,
  points,
});

export default rootReducer;