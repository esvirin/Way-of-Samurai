import {userAPI} from "../api/api";

const initialState = {
    UsersList: [],
    pageSize: 100,
    totalUsersCount: 1,
    currentPage: 1,
}

function usersReducer(state = initialState, action) {
    switch (action.type) {
        case 'FOLLOW':
            return {
                ...state,

                UsersList: state.UsersList.map((user) => {
                    if (user.id === action.userId) {
                        return {
                            ...user,
                            followed: true,
                        }
                    } else {
                        return user
                    }
                }),
            }

        case 'UNFOLLOW':
            return {
                ...state,
                UsersList: state.UsersList.map((user) => {
                    if (user.id === action.userId) {
                        return {...user, followed: false}
                    } else {
                        return user
                    }
                }),
            }

        case 'SET_USERS':
            return {...state, UsersList: [...action.newUsers]}

        case 'SET_CURRENT_PAGE':
            return {...state, currentPage: action.currentPage}

        case 'SET_TOTAL_USERS_COUNT':
            return {...state, totalUsersCount: action.count}
        default:
            return state
    }
}

export const follow = (userId) => ({type: 'FOLLOW', userId})
export const unfollow = (userId) => ({type: 'UNFOLLOW', userId})
export const setUsers = (newUsers) => ({type: 'SET_USERS', newUsers})
export const setTotalUsersCount = (count) => ({
    type: 'SET_TOTAL_USERS_COUNT',
    count,
})
export const setCurrentPage = (currentPage) => ({
    type: 'SET_CURRENT_PAGE',
    currentPage,
})


export const getUsers = (currentPage, pageSize) => {

    return (dispatch) => {
        userAPI.getUsers(currentPage, pageSize)
            .then((data) => {
                dispatch(setTotalUsersCount(data.totalCount))
                return data.items
            })
            .then((users) => dispatch(setUsers(users)))
    }
}

export const followUser = (boolean, userId) => {
    return (dispatch) => {
        userAPI.getFollowers(boolean, userId).then(data => {
            if (!data.resultCode) {
                boolean ? dispatch(follow(userId)) : dispatch(unfollow(userId))
            }
        })
    }
}


export default usersReducer
