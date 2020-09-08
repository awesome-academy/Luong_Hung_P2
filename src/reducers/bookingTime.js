import * as bookingTimeAction from '../constants/bookingTime'

const initialState = {
    loading: false,
    data: null,
    error: ''
}

const bookingTimeReducer = (state = initialState, action) => {
    switch (action.type) {
        case bookingTimeAction.BOOKING_TIME_REQUEST:
            return {
                ...state,
                loading: true
            }
        case bookingTimeAction.BOOKING_TIME_SUCCESS:
            return {
                ...state,
                data: action.payload
            }
        case bookingTimeAction.BOOKING_TIME_FAILED:
            return {
                ...state,
                data: null,
                error: action.payload
            }
        default: return state
    }
}

export default bookingTimeReducer