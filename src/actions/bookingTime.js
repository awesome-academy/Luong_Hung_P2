import * as bookingTimeAction from '../constants/bookingTime'

export const bookingTimeRequest = () => {
    return {
        type: bookingTimeAction.BOOKING_TIME_REQUEST
    }
}

export const bookingTimeSuccess = (data) => {
    return {
        type: bookingTimeAction.BOOKING_TIME_SUCCESS,
        payload: data
    }
}

export const bookingTimeFailed = (error) => {
    return {
        type: bookingTimeAction.BOOKING_TIME_FAILED,
        payload: error
    }
}