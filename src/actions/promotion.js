import * as promotionAction from '../constants/promotion'

export const promotionRequest = () => {
    return {
        type: promotionAction.PROMOTION_REQUEST
    }
}

export const promotionSuccess = (data) => {
    return {
        type: promotionAction.PROMOTION_SUCCESS,
        payload: data
    }
}

export const promotionFailed = (error) => {
    return {
        type: promotionAction.PROMOTION_FAILED,
        payload: error
    }
}