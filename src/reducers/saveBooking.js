import * as actionSaveBooking from '../constants/saveBooking'

const initialState = {
    loading: false,
    saveBooking: null,
    error: ""
}

const saveBookingReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionSaveBooking.SAVE_BOOKING_REQUEST:
            return {
                ...state,
                loading: true
            }
        case actionSaveBooking.SAVE_BOOKING_SUCCESS:
            return {
                ...state,
                saveBooking: action.payload
            }
        case actionSaveBooking.SAVE_BOOKING_FAILED:
            return {
                ...state,
                saveBooking: null,
                error: action.payload
            }
        default: return state
    }
}

export default saveBookingReducer