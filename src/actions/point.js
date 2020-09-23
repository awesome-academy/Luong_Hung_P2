import * as pointActions from "../constants/point";

export const point = () => {
  return {
    type: pointActions.POINT,
  };
};

export const pointSuccess = (data) => {
  return {
    type: pointActions.POINT_SUCCESS,
    payload: {
      data,
    },
  };
};

export const pointFailed = (error) => {
  return {
    type: pointActions.POINT_FAILED,
    payload: {
      error,
    },
  };
};

export const addPoint = (point) => {
  return {
    type: pointActions.ADD_POINT,
    payload: {
      point
    }
  };
};

export const addPointSuccess = (data) => {
  return {
    type: pointActions.ADD_POINT_SUCCESS,
    payload: {
      data,
    },
  };
};

export const addPointFailed = (error) => {
  return {
    type: pointActions.ADD_POINT_FAILED,
    payload: {
      error,
    },
  };
};

export const editPost = (point) => {
  return {
    type: pointActions.EDIT_POINT,
    payload: {
      point
    }
  };
};

export const editPostSuccess = (data) => {
  return {
    type: pointActions.EDIT_POINT_SUCCESS,
    payload: {
      data,
    },
  };
};

export const editPostFailed = (error) => {
  return {
    type: pointActions.EDIT_POINT_FAILED,
    payload: {
      error,
    },
  };
};