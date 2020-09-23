import {
    ADD_TICKET_REQUEST,
    ADD_TICKET_SUCCESS,
    ADD_TICKET_FAILED,
    EDIT_SEAT_FAILED,
    EDIT_SEAT_SUCCESS,
    EDIT_SEAT_REQUEST
} from '../constants/users'

// add ticket
export const addTicketRequest = (ticket) => {
    return {
        type: ADD_TICKET_REQUEST,
        payload: ticket
    }
}

export const addTicketSuccess = (data) => {
    return {
        type: ADD_TICKET_SUCCESS,
        payload: data
    }
}

export const addTicketFailed = (error) => {
    return {
        type: ADD_TICKET_FAILED,
        payload: error
    }
}

//  edit seat
export const editSeatRequest = (seat) => {
    return {
        type: EDIT_SEAT_REQUEST,
        payload: seat
    }
}

export const editSeatSuccess = (data) => {
    return {
        type: EDIT_SEAT_SUCCESS,
        payload: data
    }
}

export const editSeatFailed = (error) => {
    return {
        type: EDIT_SEAT_FAILED,
        payload: error
    }
}