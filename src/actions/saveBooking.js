import * as actionSaveBooking from '../constants/saveBooking'

export const saveBookingRequest = () => {
    return {
        type: actionSaveBooking.SAVE_BOOKING_REQUEST
    }
}

export const saveBookingSuccess = (data) => {
    return {
        type: actionSaveBooking.SAVE_BOOKING_SUCCESS,
        payload: data
    }
}

export const saveBookingFailed = (error) => {
    return {
        type: actionSaveBooking.SAVE_BOOKING_FAILED,
        payload: error
    }
}