import {userAPI} from '../api/api'

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
            small: "https://i.ya-webdesign.com/images/person-svg-circle-icon-1.png",
            large: 'https://i.ya-webdesign.com/images/person-svg-circle-icon-1.png'
        },
        userId: 16527,
        status: ''
    }
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
                currentUser: {...state.currentUser, status: action.statusData}
            }


        default:
            return {...state}
    }
}

const setUserProfile = (userData) => ({type: 'SET_USER_PROFILE', userData})
const setUserProfileStatus = (statusData) => ({type: 'SET_USER_PROFILE_STATUS', statusData})

export const setStatus = (newStatus) => {
    return async (dispatch) => {


        const responseSetStatus = await userAPI.setStatus(newStatus)

        if (responseSetStatus.resultCode) {
            console.error(responseSetStatus.message)
        }

        const getProfileStatus = await userAPI.getProfileStatus(16527)
        dispatch(setUserProfileStatus(getProfileStatus))

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


export default Profile
