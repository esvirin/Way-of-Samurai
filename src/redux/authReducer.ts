import {userAPI} from "../api/api";


const initialState = {
    data: {
        id: null as number | null,
        email: null as string | null,
        login: null as string | null,
    },
    isLogged: false as boolean,
}
export type initialStateType = typeof initialState

function authReducer(state = initialState, action: any): initialStateType {
    switch (action.type) {
        case 'SET_LOG_DATA':
            return {
                ...state,
                data: {...action.data},
                isLogged: action.data.id
            }
        case 'LOGOUT':
            return {
                ...state,
                isLogged: false,
                data: {
                    id: null,
                    email: null,
                    login: null
                }
            }

        default:
            return state
    }
}

// action creator
const setLogData = (data: any) => ({type: 'SET_LOG_DATA', data})
const logout = () => ({type: 'LOGOUT'})

export default authReducer


// thunks

export const authMe = () => {
    return (dispatch: any) => {

        userAPI.getMe().then((data: any) => {
            if (data.resultCode) {
                return console.error(...data.messages)
            }
            dispatch(setLogData(data.data))

        })
    }
}

export const loginMe = (obj: any) => {
    return (dispatch: any) => {

        return userAPI.login(obj).then((response: any) => {
            if (response.resultCode) {
                console.error(response.messages)
            }

            dispatch(setLogData(response.data))
            debugger
        })
    }
}

export const logoutMe = () => {
    return async (dispatch: any) => {
        const response = await userAPI.logout()
        response.resultCode ? console.error(response.messages) : dispatch(logout())
    }
}