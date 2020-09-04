import { call, delay, put, takeLatest } from "redux-saga/effects";
import {
  userLoginSuccess,
  userLoginFailed,
  userRegisterSuccess,
  userRegisterFailed,
} from "../actions/auth";
import { hideLoading, showLoading } from "../actions/ui";
import { postLogin, postRegister } from "../apis/auth";
import { STATUS_CODE } from "../constants";
import * as authTypes from "../constants/auth";
import Cookie from "js-cookie";

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

function* rootSaga() {
  yield takeLatest(authTypes.LOGIN_USER, loginUserSaga);
  yield takeLatest(authTypes.REGISTER_USER, registerUserSaga);
}

export default rootSaga;
