import * as saveFoodAction from '../constants/saveFood'

export const saveFoodRequest = () => {
    return {
        type: saveFoodAction.SAVE_FOOD_REQUEST
    }
}

export const saveFoodSuccess = (data) => {
    return {
        type: saveFoodAction.SAVE_FOOD_SUCCESS,
        payload: data
    }
}

export const saveFoodFailed = (error) => {
    return {
        type: saveFoodAction.SAVE_FOOD_FAILED,
        payload: error
    }
}