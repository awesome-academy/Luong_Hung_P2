import * as adminActions from "../constants/admin";

const initialState = {
  tickets: null,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case adminActions.TICKET: {
      return { ...state };
    }
    case adminActions.TICKET_SUCCESS: {
      const { data } = action.payload;
      return { ...state, tickets: data };
    }
    case adminActions.TICKET_FAILED: {
      return { ...state };
    }
    default:
      return state;
  }
}