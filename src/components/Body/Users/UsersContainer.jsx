import React from 'react'
import {connect} from 'react-redux'
import UsersPresent from './UsersPresent'
import {
    setUsers,
    setTotalUsersCount,
    setCurrentPage, getUsers, followUser,
} from '../../../redux/usersReducer'
import {compose} from "redux";
import {withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../../hoc/withAuthRedirect";
import {
    reselectUsers,
    selectCurrentPage,
    selectPageSize,
    selectTotalUsersCount,

} from "../../../redux/usersSelector";


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
        users: reselectUsers(state),
        pageSize: selectPageSize(state),
        totalUsersCount: selectTotalUsersCount(state),
        currentPage: selectCurrentPage(state),
    }
}


export default compose(
    connect(mapStateToProps, {
        followUser, setUsers, setCurrentPage, setTotalUsersCount, getUsers
    }), withRouter,
    withAuthRedirect
)(Users)


