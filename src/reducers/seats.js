import * as seatAction from '../constants/seats'

const initialState = {
    loading: false,
    seatData: null,
    error: ""
}

const seatReducer = (state = initialState, action) => {
    switch (action.type) {
        case seatAction.SEAT_REQUEST:
            return {
                ...state,
                loading: true
            }
        case seatAction.SEAT_SUCCESS:
            return {
                ...state,
                seatData: action.payload
            }
        case seatAction.SEAT_FAILED:
            return {
                ...state,
                seatData: null,
                error: action.payload
            }
        default: return state
    }
}

export default seatReducer