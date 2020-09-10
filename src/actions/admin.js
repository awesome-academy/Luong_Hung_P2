import * as adminActions from "../constants/admin";

export const deleteUser = (account) => {
  return {
    type: adminActions.DELETE_USER,
    payload: {
      account
    }
  };
};

export const deleteUserSuccess = (data) => {
  return {
    type: adminActions.DELETE_USER_SUCCESS,
    payload: {
      data
    },
  };
};

export const deleteUserFailed = (error) => {
  return {
    type: adminActions.DELETE_USER_FAILED,
    payload: {
      error,
    },
  };
};