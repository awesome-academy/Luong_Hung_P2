import * as authActions from "../constants/auth";
import * as editAccountActions from "../constants/account";
import { toastError, toastSuccess } from "../commons/toast";

const initialState = {
  currentUser: null,
  accounts: null,
  account: null,
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
      return { ...state, currentUser: null, account: null };
    }
    case authActions.ACCOUNT: {
      return { ...state };
    }
    case authActions.ACCOUNT_SUCCESS: {
      const { data } = action.payload;
      return { ...state, accounts: data };
    }
    case authActions.ACCOUNT_FAILED: {
      return { ...state };
    }
    case authActions.ACCOUNT_INFORMATION: {
      const { data } = action.payload;
      return { ...state, account: data };
    }
    case editAccountActions.EDIT_ACCOUNT: {
      return { ...state };
    }
    case editAccountActions.EDIT_ACCOUNT_SUCCESS: {
      const { data } = action.payload;
      toastSuccess("Edit account success.");
      return { ...state, account: [...data] };
    }
    case editAccountActions.EDIT_ACCOUNT_FAILED: {
      const { error } = action.payload;
      toastError(error);
      return { ...state };
    }
    default:
      return state;
  }
}
