import React from 'react'
import Profile from './Profile'
import {getUserProfile, loadFile, setStatus, upLoadProfile} from '../../../redux/profileReducer'
import {connect} from 'react-redux'
import {withAuthRedirect} from "../../../hoc/withAuthRedirect";
import {compose} from "redux";

class ProfileContainer extends React.Component {
    componentDidMount() {
        this.props.getUserProfile(this.props.myProfile)
    }

    render() {
        return <Profile
            currentUser={this.props.currentUser}
            statusValue={this.props.statusValue}
            setStatus={this.props.setStatus}
            loadFile={this.props.loadFile}
            upLoadProfile={this.props.upLoadProfile}
        />
    }
}


const mapStateToProps = (state) => ({
    currentUser: state.Profile.currentUser,
    statusValue: state.Profile.currentUserStatus,
    myProfile: state.Auth.isLogged

})


export default compose(
    connect(mapStateToProps, {getUserProfile, loadFile, upLoadProfile, setStatus}),
    withAuthRedirect
)(ProfileContainer)



