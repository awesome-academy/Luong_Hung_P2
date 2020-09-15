import {
    ADD_TICKET_REQUEST,
    ADD_TICKET_SUCCESS,
    ADD_TICKET_FAILED
} from '../constants/users'

const initialState = {
    addTicket: null,
    error: ""
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TICKET_REQUEST:
            return {
                ...state
            }
        case ADD_TICKET_SUCCESS:
            return {
                ...state,
                addTicket: action.payload
            }
        case ADD_TICKET_FAILED:
            return {
                ...state,
                addTicket: null,
                error: action.payload
            }
        default: return state
    }
}

export default userReducer