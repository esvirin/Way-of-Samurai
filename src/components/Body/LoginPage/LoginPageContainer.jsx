import React from "react";
import LoginPage from "./LoginPage";
import {connect} from "react-redux";
import {loginMe} from "../../../redux/authReducer";
import {compose} from "redux";
import {withLoggedRedirect} from "../../../hoc/withLoggedRedirect";
import {withFetching} from "../../../hoc/withFetching";


class LoginPageContainer extends React.Component{

    render (){
        return <LoginPage
            loginMe={this.props.loginMe}

        />
    }

}

export default compose(
    connect(null,{loginMe}),
    withLoggedRedirect,
    withFetching
)(LoginPageContainer)

