import React from 'react'
import {connect} from 'react-redux'
import * as axios from 'axios'
import UsersPresent from './UsersPresent'
import {
    unfollow,
    follow,
    setUsers,
    setTotalUsersCount,
    setCurrentPage,
} from '../../../redux/usersReducer'

class Users extends React.Component {

    componentDidMount() {
        axios
            .get(
                `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`,
                {
                    withCredentials: true,
                    headers: {
                        'API-KEY': '15bcd203-f87a-4606-9556-a1e8ecfb04be'
                    }
                }
            )
            .then((response) => {
                this.props.setTotalUsersCount(+response.data.totalCount)
                return response.data.items
            })
            .then((users) => this.props.setUsers(users))
    }

    displayCurrentPage = (page) => {

        this.props.setCurrentPage(page)
        axios
            .get(
                `https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`,
                {
                    withCredentials: true,
                    headers: {
                        'API-KEY': '15bcd203-f87a-4606-9556-a1e8ecfb04be'
                    }
                }
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


export default connect(mapStateToProps, {
    follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount
})(Users)
