import * as theaterAction from '../constants/theaters'


const initialState = {
    loading: false,
    data: null,
    error: ''
}

const theaterReducer = (state = initialState, action) => {
    switch (action.type) {
        case theaterAction.THEATER_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case theaterAction.THEATER_SUCCESS:
            return {
                ...state,
                data: action.payload
            }
        case theaterAction.THEATER_FAILED:
            return {
                ...state,
                error: action.payload
            }

        default: return state
    }
}

export default theaterReducer