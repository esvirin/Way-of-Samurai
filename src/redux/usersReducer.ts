import {userAPI} from "../api/api";

export type photosType = {
    small: string | null
    large: string | null
}
export type UsersType = {
    name: string,
    id: number,
    "photos": photosType,
    status: string | null,
    followed: boolean
}
const initialState = {
    UsersList: [] as Array<UsersType>,
    pageSize: 100 as number,
    totalUsersCount: 1 as number | 1,
    currentPage: 1 as number | 1,
}

export type initialStateType = typeof initialState

function usersReducer(state = initialState, action: any): initialStateType {
    switch (action.type) {
        case 'FOLLOW':
            return {
                ...state,

                UsersList: state.UsersList.map((user: any) => {
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
                UsersList: state.UsersList.map((user: any) => {
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


const FOLLOW = 'FOLLOW'
export type followType = { type: typeof FOLLOW, userId: number }
export const follow = (userId: number): followType => ({type: FOLLOW, userId})


const UNFOLLOW = 'UNFOLLOW'
export type unfollowType = { type: typeof UNFOLLOW, userId: number }
export const unfollow = (userId: number): unfollowType => ({type: UNFOLLOW, userId})


const SET_USERS = 'SET_USERS'
export type setUsersType = { type: typeof SET_USERS, newUsers: Array<UsersType> }
export const setUsers = (newUsers: Array<UsersType>): setUsersType => ({type: SET_USERS, newUsers})


const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
export type setTotalUsersCountType = { type: typeof SET_TOTAL_USERS_COUNT, count: number }
export const setTotalUsersCount = (count: number): setTotalUsersCountType => ({
    type: SET_TOTAL_USERS_COUNT,
    count,
})


const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
export type setCurrentPageType = { type: typeof SET_CURRENT_PAGE, currentPage: number }
export const setCurrentPage = (currentPage: number):setCurrentPageType => ({
    type: SET_CURRENT_PAGE,
    currentPage,
})



export const getUsers = (currentPage: number, pageSize: number) => {

    return (dispatch: any) => {
        userAPI.getUsers(currentPage, pageSize)
            .then((data: any) => {
                dispatch(setTotalUsersCount(data.totalCount))
                return data.items
            })
            .then((users: any) => dispatch(setUsers(users)))
    }
}

export const followUser = (boolean: boolean, userId: number) => {
    return (dispatch: any) => {
        userAPI.getFollowers(boolean, userId).then((data: any) => {
            if (!data.resultCode) {
                boolean ? dispatch(follow(userId)) : dispatch(unfollow(userId))
            }
        })
    }
}


export default usersReducer
