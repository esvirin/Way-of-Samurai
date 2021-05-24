import {appStateType} from "./redux-store";


export const selectAuthData = (state: appStateType) => {
    return state.Auth.data
}

export const selectAuthIsLogged = (state: appStateType) => {
    return state.Auth.isLogged
}


