import React from 'react'
import {connect} from "react-redux";
import Fetching from "../components/Fetching";

export const withFetching = (Component) => {
    class FetchingComponent extends React.Component {
        render() {
            if (this.props.isFetching) {
                return <Fetching />
            }
            return <Component {...this.props} />
        }
    }

    const mapStateToProps = (state) => ({
        isFetching: state.Fetching.isFetching
    })

    return connect(mapStateToProps)(FetchingComponent)
}