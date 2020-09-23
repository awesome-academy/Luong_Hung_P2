import * as uiTypes from '../constants/ui';

export const showLoading = () => ({
  type: uiTypes.SHOW_LOADING,
});

export const hideLoading = () => ({
  type: uiTypes.HIDE_LOADING,
});

export const toggleSidebar = (data) => ({
  type: uiTypes.TOGGLE_SIDEBAR,
  payload: {
    data
  }
});
