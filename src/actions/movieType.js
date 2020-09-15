import {
    MOVIE_TYPE_REQUEST,
    MOVIE_TYPE_SUCCESS,
    MOVIE_TYPE_FAILED
} from '../constants/movieType'

export const movieTypeRequest = () => {
    return {
        type: MOVIE_TYPE_REQUEST
    }
}

export const movieTypeSuccess = (data) => {
    return {
        type: MOVIE_TYPE_SUCCESS,
        payload: data
    }
}

export const movieTypeFailed = (error) => {
    return {
        type: MOVIE_TYPE_FAILED,
        payload: error
    }
}