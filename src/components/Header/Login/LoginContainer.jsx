import React from 'react'
import Login from "./Login";
import {connect} from "react-redux";
import axios from "axios";
import {setLogData} from "../../../redux/authReducer";

class LoginContainer extends React.Component {
    componentDidMount() {
        axios
            .get('https://social-network.samuraijs.com/api/1.0/auth/me', {
                withCredentials: true
            })
            .then((response) => {
                this.props.setLogData(response.data.data)
            })
    }

    render() {
        return <Login
            data={this.props.data}
            isLogged={this.props.isLogged}
        />
    }
}

const mapStateToProps = (state) => ({
    data: state.Auth.data,
    isLogged: state.Auth.isLogged
})

export default connect(mapStateToProps, {setLogData})(LoginContainer)