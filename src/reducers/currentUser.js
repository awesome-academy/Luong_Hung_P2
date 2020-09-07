import * as authActions from "../constants/auth";
import { toastError, toastSuccess } from "../commons/toast";

const initialState = {
  currentUser: null,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case authActions.LOGIN_USER: {
      return { ...state };
    }
    case authActions.LOGIN_USER_SUCCESS: {
      const { data } = action.payload;
      toastSuccess("Login success.");
      return { ...state, currentUser: data };
    }
    case authActions.LOGIN_USER_FAILED: {
      const { error } = action.payload;
      toastError(error);
      return { ...state };
    }
    case authActions.REGISTER_USER: {
      return { ...state };
    }
    case authActions.REGISTER_USER_SUCCESS: {
      const { data } = action.payload;
      toastSuccess("Register success.");
      return { ...state, currentUser: data };
    }
    case authActions.REGISTER_USER_FAILED: {
      const { error } = action.payload;
      toastError(error);
      return { ...state };
    }
    case authActions.LOGOUT_USER_SUCCESS: {
      toastSuccess("Logout success.");
      return { ...state, currentUser: null };
    }
    default:
      return state;
  }
}
