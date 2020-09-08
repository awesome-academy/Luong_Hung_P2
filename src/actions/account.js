import * as editAccountActions from "../constants/account";

export const editAccount = (account) => {
  return {
    type: editAccountActions.EDIT_ACCOUNT,
    payload: {
      account
    }
  };
};

export const editAccountSuccess = (data) => {
  return {
    type: editAccountActions.EDIT_ACCOUNT_SUCCESS,
    payload: {
      data
    },
  };
};

export const editAccountFailed = (error) => {
  return {
    type: editAccountActions.EDIT_ACCOUNT_FAILED,
    payload: {
      error,
    },
  };
};