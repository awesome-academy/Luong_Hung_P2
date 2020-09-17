import * as saveFoodAction from '../constants/saveFood'

const initialState = {
    loading: false,
    saveFoodData: null,
    error: ""
}

const saveFoodReducer = (state = initialState, action) => {
    switch (action.type) {
        case saveFoodAction.SAVE_FOOD_REQUEST:
            return {
                ...state,
                loading: true
            }
        case saveFoodAction.SAVE_FOOD_SUCCESS:
            return {
                ...state,
                saveFoodData: action.payload
            }

        case saveFoodAction.SAVE_FOOD_FAILED:
            return {
                ...state,
                saveFoodData: null,
                error: action.payload
            }
        default: return state
    }
}

export default saveFoodReducer 