import { connect } from 'react-redux'
import Users from './Users'
import { unfollowAC, followAC, setUsersAC } from '../../../redux/usersReducer'

function mapStateToProps(state) {
  return {
    users: state.Users.UsersList,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    follow: (userId) => {
      dispatch(followAC(userId))
    },
    unfollow: (userId) => {
      dispatch(unfollowAC(userId))
    },
    setUsers: (users) => {
      dispatch(setUsersAC(users))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users)
