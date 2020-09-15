import * as movieActions from "../constants/movies";

const initialState = {
  movies: null,
  movie: null,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case movieActions.MOVIE: {
      return { ...state };
    }
    case movieActions.MOVIE_SUCCESS: {
      const { data } = action.payload;
      return { ...state, movies: data };
    }
    case movieActions.MOVIE_FAILED: {
      return { ...state };
    }
    case movieActions.DETAIL_MOVIE: {
      const { movie } = action.payload;
      return { ...state, movie: movie }
    }
    default:
      return state;
  }
}