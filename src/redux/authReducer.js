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

        default:
            return state
    }
}

export const setLogData = (data) => ({type: 'SET_LOG_DATA', data})


export default authReducer
