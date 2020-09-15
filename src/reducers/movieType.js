import {
    MOVIE_TYPE_REQUEST,
    MOVIE_TYPE_SUCCESS,
    MOVIE_TYPE_FAILED
} from '../constants/movieType'

const initialState = {
    loading: false,
    data: null,
    error: ''
}

const movieTypeReducer = (state = initialState, action) => {
    switch (action.type) {
        case MOVIE_TYPE_REQUEST: {
            return {
                ...state,
                loading: true
            }
        }
        case MOVIE_TYPE_SUCCESS: {
            return {
                ...state,
                data: action.payload
            }
        }
        case MOVIE_TYPE_FAILED: {
            return {
                ...state,
                data: null,
                error: action.payload
            }
        }
        default: return state
    }
}

export default movieTypeReducer