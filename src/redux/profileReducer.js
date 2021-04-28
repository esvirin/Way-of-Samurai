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
        case 'ADD-POST':
            if (!state._currentPostText.length) {
                return {...state}
            }
            return {
                ...state,

                Posts: state.Posts.push({
                    id: state.Posts.length,
                    time: new Date().toLocaleString('ru'),
                    text: state._currentPostText
                }),
                _currentPostText: ''
            }


        case 'WATCH-POST':

            return {
                ...state,
                _currentPostText: action.text
            }

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


export const addNewPost = () => ({type: 'ADD-POST'})
export const postChange = (value) => ({type: 'WATCH-POST', value})
export const setUserProfile = (userData) => ({type: 'SET_USER_PROFILE', userData})
export const setUserProfileStatus = (statusData) => ({type: 'SET_USER_PROFILE_STATUS', statusData})

export const setStatus = (newStatus) => {
    return (dispatch) =>{

        userAPI.setStatus(newStatus).then(response => response.resultCode ? console.error(response.message) :
            userAPI.getProfileStatus(16527)
        ).then((data) => {
            dispatch(setUserProfileStatus(data))
        })


    }
}

export const getUserProfile = (userId) => {
    return (dispatch) => {
        userAPI.getProfile(userId).then((data) => {
            dispatch(setUserProfile(data))
        })
        userAPI.getProfileStatus(userId).then((data) => {
            dispatch(setUserProfileStatus(data))
        })
    }
}


export default Profile
