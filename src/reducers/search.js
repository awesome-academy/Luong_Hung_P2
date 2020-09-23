import * as searchActions from "../constants/search";

let initialState = {
  search: ""
}

const search = (state = initialState, action) => {
  switch(action.type) {
    case searchActions.SEARCH_MOVIE: {
      const { key } = action.payload;
      return { ...state, search: key }
    }
    default: return { ...state }
  }
}

export default search;
