import * as sliderBarActions from "../constants/sliderbars";

const initialState = {
  sliderBar: null,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case sliderBarActions.BANNER: {
      return { ...state };
    }
    case sliderBarActions.BANNER_SUCCESS: {
      const { data } = action.payload;
      return { ...state, sliderBar: data };
    }
    case sliderBarActions.BANNER_FAILED: {
      return { ...state };
    }
    default:
      return state;
  }
}