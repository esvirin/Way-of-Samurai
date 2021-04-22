import React from 'react'
import {connect} from 'react-redux'
import UsersPresent from './UsersPresent'
import {
    setUsers,
    setTotalUsersCount,
    setCurrentPage, getUsers, followUser,
} from '../../../redux/usersReducer'


class Users extends React.Component {

    componentDidMount() {

        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    displayCurrentPage = (page) => {

        this.props.getUsers(page, this.props.pageSize)

    }

    render() {
        return (
            <UsersPresent
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                displayCurrentPage={this.displayCurrentPage}
                users={this.props.users}
                followUser={this.props.followUser}
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
    followUser, setUsers, setCurrentPage, setTotalUsersCount, getUsers
})(Users)
