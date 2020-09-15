import {
    ADD_TICKET_REQUEST,
    ADD_TICKET_SUCCESS,
    ADD_TICKET_FAILED
} from '../constants/users'

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