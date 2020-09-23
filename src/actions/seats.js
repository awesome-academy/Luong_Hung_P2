import * as seatAction from '../constants/seats'

export const seatRequest = () => {
    return {
        type: seatAction.SEAT_REQUEST
    }
}

export const seatSuccess = (data) => {
    return {
        type: seatAction.SEAT_SUCCESS,
        payload: data
    }
}

export const seatFailed = (error) => {
    return {
        type: seatAction.SEAT_FAILED,
        payload: error
    }
}