import * as movieActions from "../constants/movies";

export const movies = () => {
  return {
    type: movieActions.MOVIE,
  };
};

export const moviesSuccess = (data) => {
  return {
    type: movieActions.MOVIE_SUCCESS,
    payload: {
      data,
    },
  };
};

export const moviesFailed = (error) => {
  return {
    type: movieActions.MOVIE_FAILED,
    payload: {
      error,
    },
  };
};