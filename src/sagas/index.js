import { call, delay, put, takeLatest } from "redux-saga/effects";
import {
  userLoginSuccess,
  userLoginFailed,
  userRegisterSuccess,
  userRegisterFailed,
  accountSuccess,
  accountFailed,
} from "../actions/auth";
import { sliderBarSuccess, sliderBarFailed } from "../actions/sliderBars";
import { moviesSuccess, moviesFailed } from "../actions/movies";
import { editAccountSuccess, editAccountFailed } from "../actions/account";
import { promotionSuccess, promotionFailed } from "../actions/promotion";
import { seatSuccess, seatFailed } from '../actions/seats'
import { theaterSuccess, theaterFailed } from "../actions/theaterAction";
import { bookingTimeSuccess, bookingTimeFailed } from "../actions/bookingTime";
import { branchSuccess, branchFailed } from "../actions/branchs";
import { addTicketFailed, addTicketSuccess } from "../actions/users";
import {
  deleteUserSuccess,
  deleteUserFailed,
  deleteMovieSuccess,
  deleteMovieFailed,
  editMovieSuccess,
  editMovieFailed,
  editUserSuccess,
  editUserFailed,
  addMovieSuccess,
  addMovieFailed,
  ticketSuccess,
  ticketFailed,
  deleteTicketSuccess,
  deleteTicketFailed,
} from "../actions/admin";
import { hideLoading, showLoading } from "../actions/ui";
import {
  postLogin,
  postRegister,
  getSliderBar,
  getMovie,
  getPromotion,
  getAccount,
  getBookingTime,
  putEditAccount,
  getTheaters,
  getBranchs,
  deleteUser,
  deleteMovie,
  putEditMovie,
  postAddMovie,
  getTicket,
  deleteTicket,
  getMovieType,
  postAddTicket,
  getPoint,
  postPoint,
  putEditPoint,
  getSeats
} from "../apis/auth";
import { STATUS_CODE } from "../constants";
import * as authTypes from "../constants/auth";
import * as sliderBarActions from "../constants/sliderbars";
import * as movieActions from "../constants/movies";
import * as promotionAction from '../constants/promotion';
import * as seatAction from '../constants/seats'
import * as movieTypeAction from '../constants/movieType'
import * as theaterAction from '../constants/theaters'
import * as bookingTimeAction from '../constants/bookingTime'
import * as branchAction from '../constants/branchs'
import * as editAccountActions from "../constants/account";
import * as adminActions from "../constants/admin";
import * as userActions from "../constants/users";
import * as pointActions from "../constants/point";
import Cookie from "js-cookie";
import md5 from "md5";
import { movieTypeFailed, movieTypeSuccess } from "../actions/movieType";
import {
  addPointFailed,
  addPointSuccess,
  editPostFailed,
  editPostSuccess,
  pointFailed,
  pointSuccess,
} from "../actions/point";

/**
 * B1: Thuc thi action
 * B2: Goi Api
 * B2.1: Hien thi cac thanh tien trin (loading...)
 * B3: Kiem tra status code
 * Neu thanh cong ...
 * Neu that bai ...
 * B4: Tat loading
 * B5: Thuc thi cac cong viec tiep theo
 */

function* loginUserSaga({ payload }) {
  const { userObj } = payload;
  yield put(showLoading());
  try {
    const resp = yield call(postLogin, userObj);
    const { data, status } = resp;
    if (status === STATUS_CODE.SUCCESS) {
      Cookie.set("accessToken", data.accessToken);
      yield put(userLoginSuccess(userObj));
    }
  } catch (error) {
    yield put(userLoginFailed(error));
  }
  yield delay(1000);
  yield put(hideLoading());
}

function* registerUserSaga({ payload }) {
  const { userObj } = payload;
  userObj.avatar = `http://gravatar.com/avatar/${md5(
    userObj.email
  )}?d=identicon`;
  userObj.ngayTao = Date.now();
  yield put(showLoading());
  try {
    const resp = yield call(postRegister, userObj);
    const { data, status } = resp;
    if (status === STATUS_CODE.CREATED) {
      Cookie.set("accessToken", data.accessToken);
      yield put(userRegisterSuccess(userObj));
    }
  } catch (error) {
    yield put(userRegisterFailed(error));
  }
  yield delay(1000);
  yield put(hideLoading());
}

function* sliderBarSaga() {
  yield put(showLoading());
  try {
    const resp = yield call(getSliderBar);
    const { data, status } = resp;
    if (status === STATUS_CODE.SUCCESS) {
      yield put(sliderBarSuccess(data));
    }
  } catch (error) {
    yield put(sliderBarFailed(error));
  }
  yield delay(1000);
  yield put(hideLoading());
}

function* movieSaga() {
  yield put(showLoading());
  try {
    const resp = yield call(getMovie);
    const { data, status } = resp;
    if (status === STATUS_CODE.SUCCESS) {
      yield put(moviesSuccess(data));
    }
  } catch (error) {
    yield put(moviesFailed(error));
  }
  yield delay(1000);
  yield put(hideLoading());
}

function* promotionSaga() {
  try {
    const resp = yield call(getPromotion);
    const { data, status } = resp;
    if (status === STATUS_CODE.SUCCESS) {
      yield put(promotionSuccess(data));
    }
  } catch (error) {
    yield put(promotionFailed(error));
  }
}

function* seatSaga() {
  try {
    const resp = yield call(getSeats)
    const { data, status } = resp
    if (status === STATUS_CODE.SUCCESS) {
      yield put(seatSuccess(data))
    }
  } catch (error) {
    yield put(seatFailed(error))
  }
}

function* movieTypeSaga() {
  try {
    const resp = yield call(getMovieType);
    const { data, status } = resp;
    if (status === STATUS_CODE.SUCCESS) {
      yield put(movieTypeSuccess(data));
    }
  } catch (error) {
    yield put(movieTypeFailed(error));
  }
}

function* theaterSaga() {
  try {
    const resp = yield call(getTheaters);
    const { data, status } = resp;
    if (status === STATUS_CODE.SUCCESS) {
      yield put(theaterSuccess(data));
    }
  } catch (error) {
    yield put(theaterFailed(error));
  }
}

function* bookingTimeSaga() {
  try {
    const resp = yield call(getBookingTime);
    const { data, status } = resp;
    if (status === STATUS_CODE.SUCCESS) {
      yield put(bookingTimeSuccess(data));
    }
  } catch (error) {
    yield put(bookingTimeFailed(error));
  }
}

function* branchSaga() {
  try {
    const resp = yield call(getBranchs);
    const { data, status } = resp;
    if (status === STATUS_CODE.SUCCESS) {
      yield put(branchSuccess(data));
    }
  } catch (error) {
    yield put(branchFailed(error));
  }
}

function* accountSaga() {
  try {
    const resp = yield call(getAccount);
    const { data, status } = resp;
    if (status === STATUS_CODE.SUCCESS) {
      yield put(accountSuccess(data));
    }
  } catch (error) {
    yield put(accountFailed(error));
  }
}

function* editAccountSaga({ payload }) {
  const { account } = payload;
  console.log(account);
  yield put(showLoading());
  try {
    const resp = yield call(putEditAccount, account);
    const { status } = resp;
    if (status === STATUS_CODE.SUCCESS) {
      yield put(editAccountSuccess(account));
    }
  } catch (error) {
    if (error === "data is not iterable") {
      yield put(editAccountFailed(error));
    }
  }
  yield delay(1000);
  yield put(hideLoading());
}

function* deleteUserSaga({ payload }) {
  const { account } = payload;
  yield put(showLoading());
  try {
    const resp = yield call(deleteUser, account);
    const { status } = resp;
    if (status === STATUS_CODE.SUCCESS) {
      yield put(deleteUserSuccess(account));
    }
  } catch (error) {
    if (error === "data is not iterable") {
      yield put(deleteUserFailed(error));
    }
  }
  yield delay(1000);
  yield put(hideLoading());
}

function* deleteMovieSaga({ payload }) {
  const { movie } = payload;
  yield put(showLoading());
  try {
    const resp = yield call(deleteMovie, movie);
    const { status } = resp;
    if (status === STATUS_CODE.SUCCESS) {
      yield put(deleteMovieSuccess(movie));
    }
  } catch (error) {
    if (error === "data is not iterable") {
      yield put(deleteMovieFailed(error));
    }
  }
  yield delay(1000);
  yield put(hideLoading());
}

function* editMovieSaga({ payload }) {
  const { movie } = payload;
  yield put(showLoading());
  try {
    const resp = yield call(putEditMovie, movie);
    const { status } = resp;
    if (status === STATUS_CODE.SUCCESS) {
      yield put(editMovieSuccess(movie));
    }
  } catch (error) {
    if (error === "data is not iterable") {
      yield put(editMovieFailed(error));
    }
  }
  yield delay(1000);
  yield put(hideLoading());
}

function* editUserSaga({ payload }) {
  const { user } = payload;
  yield put(showLoading());
  try {
    const resp = yield call(putEditAccount, user);
    const { status } = resp;
    if (status === STATUS_CODE.SUCCESS) {
      yield put(editUserSuccess(user));
    }
  } catch (error) {
    if (error === "data is not iterable") {
      yield put(editUserFailed(error));
    }
  }
  yield delay(1000);
  yield put(hideLoading());
}

function* deleteTicketSaga({ payload }) {
  const { ticket } = payload;
  yield put(showLoading());
  try {
    const resp = yield call(deleteTicket, ticket);
    const { status } = resp;
    if (status === STATUS_CODE.SUCCESS) {
      yield put(deleteTicketSuccess(ticket));
    }
  } catch (error) {
    if (error === "data is not iterable") {
      yield put(deleteTicketFailed(error));
    }
  }
  yield delay(1000);
  yield put(hideLoading());
}

function* addMovieSaga({ payload }) {
  const { movie } = payload;
  movie.diemIMDB = "N/A";
  console.log(movie);
  yield put(showLoading());
  try {
    const resp = yield call(postAddMovie, movie);
    const { status } = resp;
    if (status === STATUS_CODE.CREATED) {
      yield put(addMovieSuccess(movie));
    }
  } catch (error) {
    if (error === "data is not iterable") {
      yield put(addMovieFailed(error));
    }
  }
  yield delay(1000);
  yield put(hideLoading());
}

function* addTicketSaga({ payload }) {
  const { ticket } = payload;
  try {
    const resp = yield call(postAddTicket, ticket);
    const { status } = resp;
    if (status === STATUS_CODE.CREATED) {
      yield put(addTicketSuccess(ticket));
    }
  } catch (error) {
    if (error === "something wrong about add ticket") {
      yield put(addTicketFailed(error));
    }
  }
}

function* ticketSaga() {
  yield put(showLoading());
  try {
    const resp = yield call(getTicket);
    const { data, status } = resp;
    if (status === STATUS_CODE.SUCCESS) {
      yield put(ticketSuccess(data));
    }
  } catch (error) {
    yield put(ticketFailed(error));
  }
  yield delay(1000);
  yield put(hideLoading());
}

function* pointSaga() {
  try {
    const resp = yield call(getPoint);
    const { data, status } = resp;
    if (status === STATUS_CODE.SUCCESS) {
      yield put(pointSuccess(data));
    }
  } catch (error) {
    yield put(pointFailed(error));
  }
}

function* addPointSaga({ payload }) {
  const { point } = payload;
  try {
    const resp = yield call(postPoint, point);
    const { status } = resp;
    if (status === STATUS_CODE.CREATED) {
      yield put(addPointSuccess(point));
    }
  } catch (error) {
    if (error === "something wrong about add ticket") {
      yield put(addPointFailed(error));
    }
  }
}

function* editPointSaga({ payload }) {
  const { point } = payload;
  yield put(showLoading());
  try {
    const resp = yield call(putEditPoint, point);
    const { status } = resp;
    if (status === STATUS_CODE.SUCCESS) {
      yield put(editPostSuccess(point));
    }
  } catch (error) {
    if (error === "data is not iterable") {
      yield put(editPostFailed(error));
    }
  }
  yield delay(1000);
  yield put(hideLoading());
}

function* rootSaga() {
  yield takeLatest(authTypes.LOGIN_USER, loginUserSaga);
  yield takeLatest(authTypes.REGISTER_USER, registerUserSaga);
  yield takeLatest(sliderBarActions.BANNER, sliderBarSaga);
  yield takeLatest(movieActions.MOVIE, movieSaga);
  yield takeLatest(promotionAction.PROMOTION_REQUEST, promotionSaga)
  yield takeLatest(seatAction.SEAT_REQUEST, seatSaga)
  yield takeLatest(movieTypeAction.MOVIE_TYPE_REQUEST, movieTypeSaga)
  yield takeLatest(bookingTimeAction.BOOKING_TIME_REQUEST, bookingTimeSaga)
  yield takeLatest(branchAction.BRANCHS_REQUEST, branchSaga)
  yield takeLatest(theaterAction.THEATER_REQUEST, theaterSaga)
  yield takeLatest(authTypes.ACCOUNT, accountSaga);
  yield takeLatest(editAccountActions.EDIT_ACCOUNT, editAccountSaga);
  yield takeLatest(adminActions.DELETE_USER, deleteUserSaga);
  yield takeLatest(adminActions.EDIT_USER, editUserSaga);
  yield takeLatest(adminActions.DELETE_MOVIE, deleteMovieSaga);
  yield takeLatest(adminActions.EDIT_MOVIE, editMovieSaga);
  yield takeLatest(adminActions.ADD_MOVIE, addMovieSaga);
  yield takeLatest(userActions.ADD_TICKET_REQUEST, addTicketSaga);
  yield takeLatest(adminActions.TICKET, ticketSaga);
  yield takeLatest(adminActions.DELETE_TICKET, deleteTicketSaga);
  yield takeLatest(pointActions.POINT, pointSaga);
  yield takeLatest(pointActions.ADD_POINT, addPointSaga);
  yield takeLatest(pointActions.EDIT_POINT, editPointSaga);
}

export default rootSaga;
