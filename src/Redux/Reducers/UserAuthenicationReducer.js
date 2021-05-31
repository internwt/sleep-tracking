import { SLEEP_TIME, SIGNUP, LOGIN } from '../actionType'
let state = {
    signUp: false,
}

export const UserAuthenicationReducer = (state = {}, action) => {
    switch (action.type) {
        case SIGNUP:
            return {
                signUp: !state.signUp
            }
        default:
            return state
    }
}