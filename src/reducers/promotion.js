import * as promotionAction from '../constants/promotion'


const initialState = {
    loading: false,
    promotions: null,
    promotion: null,
    error: ""
}

const promotionReducer = (state = initialState, action) => {
    switch (action.type) {
        case promotionAction.PROMOTION_REQUEST:
            return {
                ...state,
                loading: true
            }
        case promotionAction.PROMOTION_SUCCESS:
            return {
                ...state,
                promotions: action.payload
            }
        case promotionAction.PROMOTION_FAILED: {
            return {
                ...state,
                promotions: null,
                error: action.payload
            }
        }
        case promotionAction.DETAIL_PROMOTION: {
            const { promotion } = action.payload;
            return { ...state, promotion }
        }
        default: return state
    }
}

export default promotionReducer