export const signup = 'signup';
export const login = 'login';
export const home = 'home';
export const sleep = 'sleep';
export const user = 'user'

export let formFields = {
    [signup]: [
        {
            label: 'name',
            name: 'name',
            type: 'text',
            placeholder: 'Name',
            value: '',
            error: ''
        },
        {
            label: 'email',
            name: 'email',
            type: 'text',
            placeholder: 'Email',
            value: '',
            error: ''
        },
        {

            label: 'password',
            name: 'password',
            type: 'password',
            placeholder: 'Password',
            value: '',
            error: ''
        },
    ],
    [login]: [
        {
            label: 'email',
            name: 'email',
            type: 'text',
            placeholder: 'Email',
            value: '',
            error: ''
        },
        {

            label: 'password',
            value: '',
            name: 'password',
            type: 'password',
            placeholder: 'Password',
            error: ''
        },
    ]
}