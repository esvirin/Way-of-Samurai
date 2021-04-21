import React from 'react'
import Profile from './Profile'
import * as axios from "axios";
import {setUserProfile} from '../../../redux/profileReducer'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId  = this.props.match.params.userId
        if(!userId){userId=16527}
        axios.get(
                `https://social-network.samuraijs.com/api/1.0/profile/${userId}`
            )
            .then((response) => {
                this.props.setUserProfile(response.data)
            })

    }

    render() {

        return <Profile currentUser={this.props.currentUser}/>
    }
}

const mapStateToProps = (state) => ({
    currentUser: state.Profile.currentUser
})

const ProfileContainerWithRouter = withRouter(ProfileContainer)
export default connect(mapStateToProps, {setUserProfile})(ProfileContainerWithRouter)