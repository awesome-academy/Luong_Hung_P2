import * as adminActions from "../constants/admin";
import { toastError, toastSuccess } from "../commons/toast";

const initialState = {
  deleteUser: null,
  deleteMovie: null,
  editMovie: null,
  editUser: null,
  addMovie: null
};

const bookingTimeReducer = (state = initialState, action) => {
  switch (action.type) {
    case adminActions.DELETE_USER:
      return { ...state };
    case adminActions.DELETE_USER_SUCCESS: {
      const { data } = action.payload;
      toastSuccess("Delete user success.");
      return { ...state, deleteUser: data };
    }
    case adminActions.DELETE_USER_FAILED: {
      const { error } = action.payload;
      toastError(error);
      return { ...state };
    }
    case adminActions.DELETE_MOVIE:
      return { ...state };
    case adminActions.DELETE_MOVIE_SUCCESS:{
      const { data } = action.payload;
      toastSuccess("Delete movie success.");
      return { ...state, deleteMovie: data };
    }
    case adminActions.DELETE_MOVIE_FAILED: {
      const { error } = action.payload;
      toastError(error);
      return { ...state };
    }
    case adminActions.EDIT_MOVIE:
      return { ...state };
    case adminActions.EDIT_MOVIE_SUCCESS:{
      const { data } = action.payload;
      toastSuccess("Edit movie success.");
      return { ...state, editMovie: data };
    }
    case adminActions.EDIT_MOVIE_FAILED: {
      const { error } = action.payload;
      toastError(error);
      return { ...state };
    }
    case adminActions.EDIT_USER:
      return { ...state };
    case adminActions.EDIT_USER_SUCCESS:{
      const { data } = action.payload;
      toastSuccess("Edit user success.");
      return { ...state, editUser: data };
    }
    case adminActions.EDIT_USER_FAILED: {
      const { error } = action.payload;
      toastError(error);
      return { ...state };
    }
    case adminActions.ADD_MOVIE:
      return { ...state };
    case adminActions.ADD_MOVIE_SUCCESS:{
      const { data } = action.payload;
      toastSuccess("Add movie success.");
      return { ...state, addMovie: data };
    }
    case adminActions.ADD_MOVIE_FAILED: {
      const { error } = action.payload;
      toastError(error);
      return { ...state };
    }
    default:
      return state;
  }
};

export default bookingTimeReducer;
