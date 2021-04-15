const initialState = {
  UsersList: [
    {
      id: 1,
      followed: false,
      fullName: 'Evgeny',
      status: 'im a boss',
      location: { city: 'Alicant', country: 'Spain' },
    },
    {
      id: 2,
      followed: true,
      fullName: 'Galina',
      status: 'im a boss',
      location: { city: 'Alicant', country: 'Spain' },
    },
  ],
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
      return { ...state, Users: [...state.Users, ...action.newUsers] }
    default:
      return state
  }
}

export const followAC = (userId) => ({ type: 'FOLLOW', userId })
export const unfollowAC = (userId) => ({ type: 'UNFOLLOW', userId })
export const setUsersAC = () => ({ type: 'SET_USERS' })

export default usersReducer
