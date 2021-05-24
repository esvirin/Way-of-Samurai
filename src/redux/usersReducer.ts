import {ThunkAction} from "redux-thunk";
import {userAPI} from "../api/api";
import {appStateType, InferActionsTypes} from "./redux-store";

// -------------------- TYPING -------------------------
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


// ------------------------ INITIAL STATE ----------------------

const initialState = {
    UsersList: [] as Array<UsersType>,
    pageSize: 100 as number,
    totalUsersCount: 1 as number | 1,
    currentPage: 1 as number | 1,
}

export type initialStateType = typeof initialState


// ------------------------ REDUCER ----------------------

function usersReducer(state = initialState, action: allActionTypes): initialStateType {
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

// ---------------------- ACTIONS ------------------------------------

// all types of actions for typing reducer from ./redux-store
type allActionTypes = InferActionsTypes<typeof actions>

const actions = {
    follow: (userId: number) => ({type: 'FOLLOW', userId} as const),
    unfollow: (userId: number) => ({type: 'UNFOLLOW', userId} as const),
    setUsers: (newUsers: Array<UsersType>) => ({type: 'SET_USERS', newUsers} as const),
    setTotalUsersCount: (count: number) => ({
        type: 'SET_TOTAL_USERS_COUNT',
        count,
    } as const),
    setCurrentPage: (currentPage: number) => ({
        type: 'SET_CURRENT_PAGE',
        currentPage,
    } as const)
}


// -------------------   THUNK CREATORS   -------------------------
type ThunkType = ThunkAction<void, appStateType, unknown, allActionTypes>

export const getUsers = (currentPage: number, pageSize: number): ThunkType => {
    return (dispatch) => {
        userAPI.getUsers(currentPage, pageSize)
            .then((data) => {
                dispatch(actions.setTotalUsersCount(data.totalCount))
                return data.items
            })
            .then((users) => dispatch(actions.setUsers(users)))
    }
}

export const followUser = (boolean: boolean, userId: number): ThunkType => {
    return (dispatch) => {
        userAPI.getFollowers(boolean, userId).then((data) => {
            if (!data.resultCode) {
                boolean ? dispatch(actions.follow(userId)) : dispatch(actions.unfollow(userId))
            }
        })
    }
}


export default usersReducer
