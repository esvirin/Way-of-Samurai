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
            return { ...user, followed: false }
          } else {
            return user
          }
        }),
      }

    case 'SET_USERS':
      return { ...state, UsersList: [...action.newUsers] }

    case 'SET_CURRENT_PAGE':
      return { ...state, currentPage: action.currentPage }

    case 'SET_TOTAL_USERS_COUNT':
      return { ...state, totalUsersCount: action.count }
    default:
      return state
  }
}

export const followAC = (userId) => ({ type: 'FOLLOW', userId })
export const unfollowAC = (userId) => ({ type: 'UNFOLLOW', userId })
export const setUsersAC = (newUsers) => ({ type: 'SET_USERS', newUsers })
export const setTotalUsersCountAC = (count) => ({
  type: 'SET_TOTAL_USERS_COUNT',
  count,
})
export const setCurrentPageAC = (currentPage) => ({
  type: 'SET_CURRENT_PAGE',
  currentPage,
})

export default usersReducer
