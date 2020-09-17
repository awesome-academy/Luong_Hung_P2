import * as comboFoodAction from '../constants/comboFood'

const initialState = {
    loading: false,
    comboFoodData: null,
    error: ""
}

const comboFoodReducer = (state = initialState, action) => {
    switch (action.type) {
        case comboFoodAction.COMBO_FOOD_REQUEST:
            return {
                ...state,
                loading: true
            }
        case comboFoodAction.COMBO_FOOD_SUCCESS:
            return {
                ...state,
                comboFoodData: action.payload
            }
        case comboFoodAction.COMBO_FOOD_FAILED:
            return {
                ...state,
                comboFoodData: null,
                error: action.payload
            }
        default: return state
    }
}

export default comboFoodReducer