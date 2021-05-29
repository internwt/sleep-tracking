export const signup = 'signup';
export const login = 'login';
export const home = 'home';

export let formFields = {
    [signup]: [
        {
            label: 'name',
            name: 'name',
            type: 'text',
            placeholder: 'Name'
        },
        {
            label: 'email',
            name: 'email',
            type: 'text',
            placeholder: 'Email'
        },
        {

            label: 'password',
            name: 'password',
            type: 'password',
            placeholder: 'Password'
        },
    ],
    [login]: [
        {
            label: 'email',
            name: 'email',
            type: 'text',
            placeholder: 'Email'
        },
        {

            label: 'password',
            name: 'password',
            type: 'password',
            placeholder: 'Password'
        },
    ]
}