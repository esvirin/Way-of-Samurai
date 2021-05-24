import {userAPI} from '../api/api'
import userPic from '../accets/img/defLogo.png'
import {ThunkAction} from "redux-thunk";
import {appStateType, InferActionsTypes} from "./redux-store";
import {ResponseType, ResultCodeEnum} from "../api/ResponseTypes";


// -------------------- TYPING -------------------------

type initialStateType = {
    currentUser: currentUserType
    currentUserStatus: string
}
export type currentUserType = {
    userId?: number
    aboutMe: string
    fullName: string
    lookingForAJob: boolean
    lookingForAJobDescription: string
    contacts: contactsType
    photos: photosType
}
type contactsType = {
    facebook: string
    website: string
    vk: string
    twitter: string
    instagram: string
}
export type photosType = {
    small: string
    large: string
}


// ------------------------ INITIAL STATE ----------------------

const initialState = {
    currentUser: {
        aboutMe: '',
        fullName: '',
        lookingForAJob: false,
        lookingForAJobDescription: '',
        contacts: {
            facebook: '',
            website: '',
            vk: '',
            twitter: '',
            instagram: '',
        },
        photos: {
            small: userPic as string,
            large: userPic as string,
        }
    },
    currentUserStatus: ''
}


// ------------------------ REDUCER ----------------------

function Profile(state = initialState, action: allActionTypes): initialStateType {


    switch (action.type) {

        case 'SET_USER_PROFILE':
            return {
                ...state,
                currentUser: action.userData
            }

        case 'SET_USER_PROFILE_STATUS':
            return {
                ...state,
                currentUserStatus: action.statusData
            }
        case 'SET_USER_PHOTO':
            return {
                ...state,
                currentUser: {...state.currentUser, photos: action.photos}
            }

        default:
            return {...state}
    }
}


// ---------------------- ACTIONS ------------------------------------
type allActionTypes = InferActionsTypes<typeof actions>
const actions = {
    setUserProfile: (userData: currentUserType) => ({type: 'SET_USER_PROFILE', userData} as const),
    setUserProfileStatus: (statusData: string) => ({
        type: 'SET_USER_PROFILE_STATUS',
        statusData
    } as const),
    setUserPhoto: (photos: photosType) => ({type: 'SET_USER_PHOTO', photos} as const)
}


// -------------------   THUNK CREATORS   -------------------------

// all types of actions for typing reducer from ./redux-store
type ThunkType = ThunkAction<void, appStateType, unknown, allActionTypes>


export const setStatus = (newStatus: string): ThunkType => {
    return async (dispatch) => {
        const response: ResponseType<Object> = await userAPI.setStatus(newStatus)
        response.resultCode === ResultCodeEnum.Success ? console.error(...response.messages) :
            dispatch(actions.setUserProfileStatus(newStatus))
    }
}

export const getUserProfile = (userId: number): ThunkType => {
    return async (dispatch) => {

        const data = await userAPI.getProfile(userId)
        dispatch(actions.setUserProfile(data))

        const status = await userAPI.getProfileStatus(userId)
        dispatch(actions.setUserProfileStatus(status))

    }
}

export const loadFile = (file: File): ThunkType => {
    return async (dispatch) => {
        const response = await userAPI.loadFile(file)
        response.resultCode === ResultCodeEnum.Success ? console.error(...response.messages) :
            dispatch(actions.setUserPhoto(response.data))
    }
}

export const upLoadProfile = (profile: currentUserType): ThunkType => {
    return async (dispatch, getState) => {
        const response = await userAPI.upLoadProfile(profile)
        response.resultCode ? console.error(...response.messages) :
            // @ts-ignore
            dispatch(getUserProfile(getState().Auth.isLogged))

    }
}

export default Profile;

