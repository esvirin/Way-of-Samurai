import React from 'react'
import Profile from './Profile'
import * as axios from "axios";
import {getUserProfile, setUserProfile} from '../../../redux/profileReducer'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'

class ProfileContainer extends React.Component {

    componentDidMount() {

        this.props.getUserProfile(this.props.match.params.userId)

    }

    render() {

        return <Profile currentUser={this.props.currentUser}/>
    }
}

const mapStateToProps = (state) => ({
    currentUser: state.Profile.currentUser
})

const ProfileContainerWithRouter = withRouter(ProfileContainer)
export default connect(mapStateToProps, {getUserProfile})(ProfileContainerWithRouter)