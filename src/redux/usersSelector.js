import {createSelector} from "reselect";

 const selectUsers = (state) => {
    return state.Users.UsersList
}

// library RESELECTOR
export const reselectUsers = createSelector(selectUsers, (users)=>{
    return users.filter(u => true)
})

export const selectPageSize = (state) => {
    return state.Users.pageSize
}

export const selectTotalUsersCount = (state) => {
    return state.Users.totalUsersCount
}

export const selectCurrentPage = (state) => {
    return state.Users.currentPage
}



