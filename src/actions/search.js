import * as searchActions from "../constants/search";

export const searchMovie = (key) => {
  return {
    type: searchActions.SEARCH_MOVIE,
    payload: {
      key
    }
  }
}