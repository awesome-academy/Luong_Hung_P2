import * as theaterAction from '../constants/theaters'


export const theaterRequest = () => {
    return {
        type: theaterAction.THEATER_REQUEST
    }
}

export const theaterSuccess = (data) => {
    return {
        type: theaterAction.THEATER_SUCCESS,
        payload: data
    }
}

export const theaterFailed = (error) => {
    return {
        type: theaterAction.THEATER_FAILED,
        payload: error
    }
}