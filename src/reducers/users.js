import {
    ADD_TICKET_REQUEST,
    ADD_TICKET_SUCCESS,
    ADD_TICKET_FAILED,
    EDIT_SEAT_FAILED,
    EDIT_SEAT_SUCCESS,
    EDIT_SEAT_REQUEST
} from '../constants/users'
import { toastError, toastSuccess } from "../commons/toast";

const initialState = {
    addTicket: null,
    editSeat: null,
    error: ""
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {

        // add ticket
        case ADD_TICKET_REQUEST:
            return {
                ...state
            }
        case ADD_TICKET_SUCCESS:
            toastSuccess("Booking Ticket Success.");
            return {
                ...state,
                addTicket: action.payload
            }
        case ADD_TICKET_FAILED:
            const error = { error: "Booking failed" };
            toastError(error);
            return {
                ...state,
                addTicket: null,
                error: action.payload
            }

        // edit seat
        case EDIT_SEAT_REQUEST:
            return {
                ...state
            }
        case EDIT_SEAT_SUCCESS:
            return {
                ...state,
                editSeat: action.payload
            }
        case EDIT_SEAT_FAILED:
            toastError(error);
            return {
                ...state,
                editSeat: null,
                error: action.payload
            }
        default: return state
    }
}

export default userReducer