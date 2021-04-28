import React from 'react'
import Profile from './Profile'
import {getUserProfile,setStatus} from '../../../redux/profileReducer'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {withAuthRedirect} from "../../../hoc/withAuthRedirect";
import {compose} from "redux";

class ProfileContainer extends React.Component {

    componentDidMount() {
        this.props.getUserProfile(this.props.match.params.userId)
    }

    render() {
        return <Profile
            currentUser={this.props.currentUser}
            statusValue={this.props.statusValue}
            setStatus={this.props.setStatus}
        />
    }
}


const mapStateToProps = (state) => ({
    currentUser: state.Profile.currentUser,
    statusValue: state.Profile.currentUser.status
})


export default compose(
    connect(mapStateToProps, {getUserProfile,setStatus}),
    withRouter,
    withAuthRedirect
)(ProfileContainer)



