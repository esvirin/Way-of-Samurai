import React from 'react'
import Login from "./Login";
import {connect} from "react-redux";
import {authMe, logoutMe} from "../../../redux/authReducer";


class LoginContainer extends React.Component {
    componentDidMount() {
        this.props.authMe()
    }

    render() {
        return <Login
            data={this.props.data}
            isLogged={this.props.isLogged}
            logoutMe={this.props.logoutMe}
        />
    }
}

const mapStateToProps = (state) => ({
    data: state.Auth.data,
    isLogged: state.Auth.isLogged
})

export default connect(mapStateToProps, {authMe,logoutMe})(LoginContainer)