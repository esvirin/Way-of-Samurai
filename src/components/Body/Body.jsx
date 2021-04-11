import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import style from './body.module.scss'
import Profile from './Profile/Profile'
import Sidebar from './Sidebar/Sidebar'
import Messages from './Messages/Messages'

function Body(props) {
  return (
    <BrowserRouter>
      <div className={style.body}>
        <Sidebar />
        <Route
          path='/Profile'
          render={() => (
            <Profile disputch={props.disputch} profile={props.state.Profile} />
          )}
        />
        <Route path='/Messages' render={() => <Messages />} />
      </div>
    </BrowserRouter>
  )
}

export default Body
