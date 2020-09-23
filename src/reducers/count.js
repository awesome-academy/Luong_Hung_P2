
import { INCREAMENT_COUNT, DECREAMENT_COUNT } from '../constants/count'

const initialState = {
    count: 0
}

const countReducer = (state = initialState, action) => {
    switch (action.type) {
        case INCREAMENT_COUNT:
            return {
                ...state,
                count: action.payload + 1
            }
        case DECREAMENT_COUNT:
            if (state.quantity > 0) {
                return {
                    ...state,
                    count: action.payload - 1
                }
            }
        default: return state
    }
}

export default countReducer