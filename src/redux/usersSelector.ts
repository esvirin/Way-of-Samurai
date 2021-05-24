import {createSelector} from "reselect";
import {appStateType} from "./redux-store";

const selectUsers = (state: appStateType) => {
    return state.Users.UsersList
}

// library RESELECT
export const reselectUsers = createSelector(selectUsers, (users) => {
    return users.filter(u => true)
})

export const selectPageSize = (state: appStateType) => {
    return state.Users.pageSize
}

export const selectTotalUsersCount = (state: appStateType) => {
    return state.Users.totalUsersCount
}

export const selectCurrentPage = (state: appStateType) => {
    return state.Users.currentPage
}



