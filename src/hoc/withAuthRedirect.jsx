import React from 'react'
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";

export const withAuthRedirect = (Component) => {
    class RedirectComponent extends React.Component {
        render() {
            if (!this.props.isLogged) {
                return <Redirect to={'/Login'}/>
            }
            return <Component {...this.props} />
        }
    }

    const mapStateToProps = (state) => ({
        isLogged: state.Auth.isLogged
    })

    return connect(mapStateToProps)(RedirectComponent)
}