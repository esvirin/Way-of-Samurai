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
        userId: 16527
    }
}

function Posts(state = initialState, action) {


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

        default:
            return {...state}
    }
}


export const addNewPost = () => ({type: 'ADD-POST'})
export const postChange = (value) => ({type: 'WATCH-POST', value})
export const setUserProfile = (userData) => ({type: 'SET_USER_PROFILE', userData})


export default Posts
