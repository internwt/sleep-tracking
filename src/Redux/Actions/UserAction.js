import { SIGNUP, LOGIN } from '../actionType'



export const createUser = (user) => {
    const setUser = localStorage.setItem('user', JSON.stringify(user))
}

export const getUserDetails = (user) => {
    return localStorage.getItem('user')
}

export const userAction = (type, data) => async (dispatch) => {
    console.log(`type,data`, type, data)
    switch (type) {
        case SIGNUP:
            return signupAction(type, data)
        case LOGIN:
            return dispatch(loginAction(type, data))
        default:
            return;

    }

}


export const signupAction = (type, user) => async (dispatch) => {
    console.log(`hello world`)
}

export const loginAction = (type, user) => async (dispatch) => {
    console.log(`login actions`)
}

export const resetPasswordAction = (type, user) => async (dispatch) => {
    console.log(`resetPasswordAction`)
}