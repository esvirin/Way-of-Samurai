import {userAPI} from "../api/api";


const initialState = {
    data: {
        id: null,
        email: null,
        login: null
    },
    isLogged: false,
}

function authReducer(state = initialState, action) {
    switch (action.type) {
        case 'SET_LOG_DATA':
            return {
                ...state,
                data: {...action.data},
                isLogged: true
            }
        case 'LOGOUT':
            return {
                ...state,
                isLogged: false,
                data: {}
            }

        default:
            return state
    }
}

// action creator
const setLogData = (data) => ({type: 'SET_LOG_DATA', data})
const logout = () => ({type: 'LOGOUT'})

export default authReducer


// thunks

export const authMe = () => {
    return (dispatch) => {

        userAPI.getMe().then((data) => {
            if (data.resultCode) {
                console.error(data.messages)
            }
            dispatch(setLogData(data.data))

        })
    }
}

export const loginMe = (obj) => {
    return (dispatch) => {

        return userAPI.login(obj).then(data => {
            if (data.resultCode) {
                console.error(data.messages)
            }

            dispatch(setLogData(data.data))

        })
    }
}

export const logoutMe = () => {
    return async (dispatch) => {
        const response = await userAPI.logout()
        response.resultCode ? console.error(response.messages) : dispatch(logout())
    }
}