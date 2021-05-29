import { SIGNUP, LOGIN } from '../actionType'

const createUser = (user) => {
    const setUser = localStorage.setItem('user', JSON.stringify(user))
}

const getUserDetails = (user) => {
    return localStorage.getItem('user')
}

export const userAction = (type, user) => async (dispatch) => {
    console.log(`type,`, type, user)
    if (type === SIGNUP) {
        createUser(user)
    }
    if (type === LOGIN) {
        const isUser = getUserDetails(user)
        // user login successfull
        if (isUser) {

        } else {
            console.log(`please try again`)
        }
    }

}