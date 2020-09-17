import * as saveSeatAction from '../constants/saveSeat'

const inititalState = {
    loading: false,
    saveSeatData: null,
    error: ""
}

const saveSeatReducer = (state = inititalState, action) => {
    switch (action.type) {
        case saveSeatAction.SAVE_SEAT_REQUEST:
            return {
                ...state,
                loading: true
            }
        case saveSeatAction.SAVE_SEAT_SUCCESS:
            return {
                ...state,
                saveSeatData: action.payload
            }
        case saveSeatAction.SAVE_SEAT_FAILED:
            return {
                ...state,
                saveSeatData: null,
                error: action.payload
            }
        default: return state
    }
}

export default saveSeatReducer