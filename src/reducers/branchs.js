import * as branchAction from '../constants/branchs'

const initialState = {
    loading: false,
    data: null,
    error: ''
}


const branchReducer = (state = initialState, action) => {
    switch (action.type) {
        case branchAction.BRANCHS_REQUEST:
            return {
                ...state,
                loading: true
            }
        case branchAction.BRANCHS_SUCCESS:
            return {
                ...state,
                data: action.payload
            }
        case branchAction.BRANCHS_FAILED:
            return {
                ...state,
                data: null,
                error: action.payload
            }
        default: return state
    }
}

export default branchReducer