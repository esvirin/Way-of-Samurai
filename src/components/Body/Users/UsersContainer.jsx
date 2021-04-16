import React from 'react'
import { connect } from 'react-redux'
import * as axios from 'axios'
import UsersPresent from './UsersPresent'
import {
  unfollowAC,
  followAC,
  setUsersAC,
  setCurrentPageAC,
  setTotalUsersCountAC,
} from '../../../redux/usersReducer'

class Users extends React.Component {
  componentDidMount() {
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
      )
      .then((response) => {
        this.props.setTotalUsersCount(+response.data.totalCount)
        return response.data.items
      })
      .then((users) => this.props.setUsers(users))
  }

  displayCurrentPage(page) {
    this.props.setCurrentPage(page)
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`
      )
      .then((response) => {
        this.props.setTotalUsersCount(+response.data.totalCount)
        return response.data.items
      })
      .then((users) => this.props.setUsers(users))
  }

  render() {
    return (
      <UsersPresent
        totalUsersCount={this.props.totalUsersCount}
        pageSize={this.props.pageSize}
        displayCurrentPage={this.displayCurrentPage}
        users={this.props.users}
        unfollow={this.props.unfollow}
        follow={this.props.follow}
        currentPage={this.props.currentPage}
      />
    )
  }
}

function mapStateToProps(state) {
  return {
    users: state.Users.UsersList,
    pageSize: state.Users.pageSize,
    totalUsersCount: state.Users.totalUsersCount,
    currentPage: state.Users.currentPage,
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
    setCurrentPage: (currentPage) => {
      dispatch(setCurrentPageAC(currentPage))
    },
    setTotalUsersCount: (count) => {
      dispatch(setTotalUsersCountAC(count))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users)
