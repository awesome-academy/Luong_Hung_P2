import * as uiTypes from '../constants/ui';

const initialState = {
  showLoading: false,
  showSidebar: false
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case uiTypes.SHOW_LOADING: {
      return {
        ...state,
        showLoading: true,
      }
    }
    case uiTypes.HIDE_LOADING: {
      return {
        ...state,
        showLoading: false,
      }
    }
    case uiTypes.TOGGLE_SIDEBAR: {
      const { data } = action.payload;
      return {
        ...state,
        showSidebar: data,
      }
    }
    default: return state;
  }
}

export default reducer;