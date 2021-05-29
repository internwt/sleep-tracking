
let state = {
    signUp: false,
}

export const UserAuthenicationReducer = (state = {}, action) => {
    switch (action.type) {
        case "SIGNUP":
            let user = localStorage.getItem('email', 'singeht')
            if (!user) {

            }
            return {
                signUp: !state.signUp
            }
        default:
            return state
    }
}