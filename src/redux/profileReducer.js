import {userAPI} from '../api/api'
import userPic from '../accets/img/defLogo.png'

const initialState = {
    Posts: [],
    _currentPostText: '',

    currentUser: {
        aboutMe: "",
        contacts: {
            facebook: "",
            website: "",
            vk: "",
            twitter: "",
            instagram: "",
        },
        fullName: "",
        lookingForAJob: false,
        lookingForAJobDescription: "",
        photos: {
            small: userPic,
            large: userPic
        }
    },
    currentUserStatus: ''
}

function Profile(state = initialState, action) {


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

const setUserProfile = (userData) => ({type: 'SET_USER_PROFILE', userData})
const setUserProfileStatus = (statusData) => ({type: 'SET_USER_PROFILE_STATUS', statusData})
const setUserPhoto = (photos) => ({type: 'SET_USER_PHOTO', photos})


export const setStatus = (newStatus) => {
    return async (dispatch) => {
        const responseSetStatus = await userAPI.setStatus(newStatus)
        responseSetStatus.resultCode ? console.error(...responseSetStatus.messages) :
            dispatch(setUserProfileStatus(newStatus))
    }
}

export const getUserProfile = (userId) => {
    return async (dispatch) => {

        const data = await userAPI.getProfile(userId)
        dispatch(setUserProfile(data))

        const status = await userAPI.getProfileStatus(userId)
        dispatch(setUserProfileStatus(status))

    }
}

export const loadFile = (file) => {
    return async (dispatch) => {
        const response = await userAPI.loadFile(file)
        response.resultCode ? console.error(...response.messages) :
            dispatch(setUserPhoto(response.data))
    }
}

export const upLoadProfile = (profile) => {
    return async (dispatch, getState) => {
        const response = await userAPI.upLoadProfile(profile)

        response.resultCode ? console.error(...response.messages) :
            dispatch(getUserProfile(getState().Auth.isLogged))

    }
}

export default Profile
