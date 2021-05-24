import {userAPI} from "../api/api";
import {AuthLoginResponseDATAType} from '../api/ResponseTypes'
import {ThunkAction} from "redux-thunk";
import {appStateType, InferActionsTypes} from "./redux-store";
// -------------------- TYPING -------------------------

type loginData = {
    id: number | null
    email: string | null
    login: string | null
}

export type initialStateType = {
    data: loginData
    isLogged: boolean | number
}


// ------------------------ INITIAL STATE ----------------------

const initialState = {
    data: {
        id: null as number | null,
        email: null as string | null,
        login: null as string | null,
    },
    isLogged: false as boolean | number,
}


// ------------------------ REDUCER ----------------------

function authReducer(state = initialState, action: allActionTypes): initialStateType {
    switch (action.type) {
        case 'SET_LOG_DATA':
            return {
                ...state,
                data: action.data

            }
        case "SET_IS_LOGGED":
            return {
                ...state,
                isLogged: action.data.userId

            }
        case 'LOGOUT':
            return {
                ...state,
                isLogged: false,
                data: {
                    id: 0,
                    email: null,
                    login: null
                }
            }

        default:
            return state
    }
}

// ---------------------- ACTIONS ------------------------------------

// all types of actions for typing reducer from ./redux-store
type allActionTypes = InferActionsTypes<typeof actions>
const actions = {
    setLogData: (data: loginData) => ({type: 'SET_LOG_DATA', data} as const),
    logout: () => ({type: 'LOGOUT'} as const),
    setIsLogged: (data: AuthLoginResponseDATAType) => ({type: 'SET_IS_LOGGED', data} as const),
}


// -------------------   THUNK CREATORS   -------------------------
type ThunkType = ThunkAction<void, appStateType, unknown, allActionTypes>

export const authMe = (): ThunkType => {
    return (dispatch) => {

        userAPI.getMe().then((response) => {
            if (response.resultCode) {
                return console.error(...response.messages)
            }

            dispatch(actions.setLogData(response.data))

        })
    }
}

export const loginMe = (obj: any): ThunkType => {
    return (dispatch) => {

        return userAPI.login(obj).then((response) => {
            if (response.resultCode) {
                console.error(response.messages)
            }
            dispatch(actions.setIsLogged(response.data))

        })
    }
}

export const logoutMe = (): ThunkType => {
    return async (dispatch) => {
        const response = await userAPI.logout()
        response.resultCode ? console.error(response.messages) : dispatch(actions.logout())
    }
}

export default authReducer;