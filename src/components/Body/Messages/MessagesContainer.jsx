import style from './Messages.module.scss'
import React from 'react'
import {compose} from "redux";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../../hoc/withAuthRedirect";

class MessagesContainer extends React.Component{
  render() {
      return  <div className={style.Messages}>
      <div>Messages</div>
    </div>
  }
}
const mapStateToProps = (state)=>({})

export default compose(
    connect(mapStateToProps, {}),
    withRouter,
    withAuthRedirect
)(MessagesContainer)
