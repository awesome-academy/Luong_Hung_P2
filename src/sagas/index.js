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
import { promotionSuccess, promotionFailed } from "../actions/promotion"
import { theaterSuccess, theaterFailed } from '../actions/theaterAction';
import { bookingTimeSuccess, bookingTimeFailed } from "../actions/bookingTime"
import { branchSuccess, branchFailed } from '../actions/branchs';
import { deleteUserSuccess, deleteUserFailed, deleteMovieSuccess, deleteMovieFailed, editMovieSuccess, editMovieFailed, editUserSuccess, editUserFailed, addMovieSuccess, addMovieFailed } from '../actions/admin';
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
  postAddMovie
}
  from "../apis/auth";
import { STATUS_CODE } from "../constants";
import * as authTypes from "../constants/auth";
import * as sliderBarActions from "../constants/sliderbars";
import * as movieActions from "../constants/movies";
import * as promotionAction from '../constants/promotion';
import * as theaterAction from '../constants/theaters'
import * as bookingTimeAction from '../constants/bookingTime'
import * as branchAction from '../constants/branchs'
import * as editAccountActions from "../constants/account";
import * as adminActions from "../constants/admin";
import Cookie from "js-cookie";
import md5 from "md5";

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
  userObj.avatar = `http://gravatar.com/avatar/${md5(userObj.email)}?d=identicon`;
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

function* theaterSaga() {
  try {
    const resp = yield call(getTheaters)
    const { data, status } = resp
    if (status === STATUS_CODE.SUCCESS) {
      yield put(theaterSuccess(data))
    }
  } catch (error) {
    yield put(theaterFailed(error))
  }
}

function* bookingTimeSaga() {
  try {
    const resp = yield call(getBookingTime)
    const { data, status } = resp
    if (status === STATUS_CODE.SUCCESS) {
      yield put(bookingTimeSuccess(data))
    }
  } catch (error) {
    yield put(bookingTimeFailed(error))
  }
}

function* branchSaga() {
  try {
    const resp = yield call(getBranchs)
    const { data, status } = resp
    if (status === STATUS_CODE.SUCCESS) {
      yield put(branchSuccess(data))
    }
  } catch (error) {
    yield put(branchFailed(error))
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

function* addMovieSaga({ payload }) {
  const { movie } = payload;
  movie.diemIMDB = 0;
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

function* rootSaga() {
  yield takeLatest(authTypes.LOGIN_USER, loginUserSaga);
  yield takeLatest(authTypes.REGISTER_USER, registerUserSaga);
  yield takeLatest(sliderBarActions.BANNER, sliderBarSaga);
  yield takeLatest(movieActions.MOVIE, movieSaga);
  yield takeLatest(promotionAction.PROMOTION_REQUEST, promotionSaga)
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
}

export default rootSaga;
