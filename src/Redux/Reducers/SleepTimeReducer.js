
import { SLEEP_TIME } from '../actionType'
const initialState = {
   
}

export const sleepTimeReducer = (state = initialState, action) => {
    console.log(`action`, action)
    switch (action.type) {
        case SLEEP_TIME:
            return {
                ...state,
                sleepData: action.sleepData
            }
        default:
            return state
    }
}