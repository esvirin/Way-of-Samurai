import React from 'react'
import { Route } from 'react-router-dom'
import style from './body.module.scss'
import Profile from './Profile/Profile'
import Sidebar from './Sidebar/Sidebar'
import Messages from './Messages/Messages'
import UsersContainer from './Users/UsersContainer'

function Body(props) {
  return (
    <div className={style.body}>
      <Sidebar />
      <Route path='/Profile' render={() => <Profile />} />
      <Route path='/Messages' render={() => <Messages />} />
      <Route path='/Users' render={() => <UsersContainer />} />
    </div>
  )
}

export default Body
