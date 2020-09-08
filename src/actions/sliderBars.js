import * as sliderBarActions from "../constants/sliderbars";

export const sliderBar = () => {
  return {
    type: sliderBarActions.BANNER,
  };
};

export const sliderBarSuccess = (data) => {
  return {
    type: sliderBarActions.BANNER_SUCCESS,
    payload: {
      data,
    },
  };
};

export const sliderBarFailed = (error) => {
  return {
    type: sliderBarActions.BANNER_FAILED,
    payload: {
      error,
    },
  };
};