import * as adminActions from "../constants/admin";

export const deleteUser = (account) => {
  return {
    type: adminActions.DELETE_USER,
    payload: {
      account
    }
  };
};

export const deleteUserSuccess = (data) => {
  return {
    type: adminActions.DELETE_USER_SUCCESS,
    payload: {
      data
    },
  };
};

export const deleteUserFailed = (error) => {
  return {
    type: adminActions.DELETE_USER_FAILED,
    payload: {
      error,
    },
  };
};

export const deleteMovie = (movie) => {
  return {
    type: adminActions.DELETE_MOVIE,
    payload: {
      movie
    }
  };
};

export const deleteMovieSuccess = (data) => {
  return {
    type: adminActions.DELETE_MOVIE_SUCCESS,
    payload: {
      data
    },
  };
};

export const deleteMovieFailed = (error) => {
  return {
    type: adminActions.DELETE_MOVIE_FAILED,
    payload: {
      error,
    },
  };
};

export const editMovie = (movie) => {
  return {
    type: adminActions.EDIT_MOVIE,
    payload: {
      movie
    }
  };
};

export const editMovieSuccess = (data) => {
  return {
    type: adminActions.EDIT_MOVIE_SUCCESS,
    payload: {
      data
    },
  };
};

export const editMovieFailed = (error) => {
  return {
    type: adminActions.EDIT_MOVIE_FAILED,
    payload: {
      error,
    },
  };
};

export const editUser = (user) => {
  return {
    type: adminActions.EDIT_USER,
    payload: {
      user
    }
  };
};

export const editUserSuccess = (data) => {
  return {
    type: adminActions.EDIT_USER_SUCCESS,
    payload: {
      data
    },
  };
};

export const editUserFailed = (error) => {
  return {
    type: adminActions.EDIT_USER_FAILED,
    payload: {
      error,
    },
  };
};

export const addMovie = (movie) => {
  return {
    type: adminActions.ADD_MOVIE,
    payload: {
      movie
    }
  };
};

export const addMovieSuccess = (data) => {
  return {
    type: adminActions.ADD_MOVIE_SUCCESS,
    payload: {
      data
    },
  };
};

export const addMovieFailed = (error) => {
  return {
    type: adminActions.ADD_MOVIE_FAILED,
    payload: {
      error,
    },
  };
};

export const ticket = () => {
  return {
    type: adminActions.TICKET,
  };
};

export const ticketSuccess = (data) => {
  return {
    type: adminActions.TICKET_SUCCESS,
    payload: {
      data
    },
  };
};

export const ticketFailed = (error) => {
  return {
    type: adminActions.TICKET_FAILED,
    payload: {
      error,
    },
  };
};

export const deleteTicket = (ticket) => {
  return {
    type: adminActions.DELETE_TICKET,
    payload: {
      ticket
    }
  };
};

export const deleteTicketSuccess = (data) => {
  return {
    type: adminActions.DELETE_TICKET_SUCCESS,
    payload: {
      data
    },
  };
};

export const deleteTicketFailed = (error) => {
  return {
    type: adminActions.DELETE_TICKET_FAILED,
    payload: {
      error,
    },
  };
};