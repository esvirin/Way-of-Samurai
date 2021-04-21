import React from 'react'
import { Route } from 'react-router-dom'
import style from './body.module.scss'
import ProfileContainer from './Profile/ProfileContainer'
import Sidebar from './Sidebar/Sidebar'
import Messages from './Messages/Messages'
import UsersContainer from './Users/UsersContainer'
import LoginPageContainer from "./LoginPage/LoginPageContainer";

function Body(props) {
  return (
    <div className={style.body}>
      <Sidebar />
      <Route path='/Profile/:userId?' render={() => <ProfileContainer />} />
      <Route path='/Messages' render={() => <Messages />} />
      <Route path='/Users' render={() => <UsersContainer />} />
      <Route path='/Login' render={() => <LoginPageContainer />} />
    </div>
  )
}

export default Body
