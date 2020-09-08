import * as branchAction from '../constants/branchs'

export const branchRequest = () => {
    return {
        type: branchAction.BRANCHS_REQUEST
    }
}

export const branchSuccess = (data) => {
    return {
        type: branchAction.BRANCHS_SUCCESS,
        payload: data
    }
}

export const branchFailed = (error) => {
    return {
        type: branchAction.BRANCHS_FAILED,
        payload: error
    }
}