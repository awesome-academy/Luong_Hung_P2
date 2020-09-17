import * as saveSeatAction from '../constants/saveSeat'

export const saveSeatRequest = () => {
    return {
        type: saveSeatAction.SAVE_SEAT_REQUEST
    }
}

export const saveSeatSuccess = (data) => {
    return {
        type: saveSeatAction.SAVE_SEAT_SUCCESS,
        payload: data
    }
}

export const saveSeatFailed = (error) => {
    return {
        type: saveSeatAction.SAVE_SEAT_FAILED,
        payload: error
    }
}