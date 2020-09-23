import * as comboFoodAction from '../constants/comboFood'

export const comboFoodRequest = () => {
    return {
        type: comboFoodAction.COMBO_FOOD_REQUEST
    }
}

export const comboFoodSuccess = (data) => {
    return {
        type: comboFoodAction.COMBO_FOOD_SUCCESS,
        payload: data
    }
}

export const comboFoodFailed = (error) => {
    return {
        type: comboFoodAction.COMBO_FOOD_FAILED,
        payload: error
    }
}