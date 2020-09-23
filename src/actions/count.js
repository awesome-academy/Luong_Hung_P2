
import { INCREAMENT_COUNT, DECREAMENT_COUNT } from '../constants/count'

export const increamentCount = (count) => {
    return {
        type: INCREAMENT_COUNT,
        payload: count
    }
}

export const decreamentCount = (count) => {
    return {
        type: DECREAMENT_COUNT,
        payload: count
    }
}