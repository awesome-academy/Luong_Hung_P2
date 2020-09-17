import * as pointActions from "../constants/point";
import { toastError, toastSuccess } from "../commons/toast";

const initialState = {
  points: null,
  addPoint: null,
  editPoint: null
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case pointActions.POINT: {
      return { ...state };
    }
    case pointActions.POINT_SUCCESS: {
      const { data } = action.payload;
      return { ...state, points: data };
    }
    case pointActions.POINT_FAILED: {
      return { ...state };
    }
    case pointActions.ADD_POINT: {
      return { ...state };
    }
    case pointActions.ADD_POINT_SUCCESS: {
      const { data } = action.payload;
      return { ...state, addPoint: data };
    }
    case pointActions.ADD_POINT_FAILED: {
      return { ...state };
    }
    case pointActions.EDIT_POINT: {
      return { ...state };
    }
    case pointActions.EDIT_POINT_SUCCESS: {
      const { data } = action.payload;
      toastSuccess("Evaluate success");
      return { ...state, editPoint: data };
    }
    case pointActions.EDIT_POINT_FAILED: {
      const { error } = action.payload;
      toastError(error);
      return { ...state };
    }
    default:
      return state;
  }
}