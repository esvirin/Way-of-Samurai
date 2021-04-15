import React from 'react'
import { NavLink } from 'react-router-dom'
import style from './Sidebar.module.scss'
function Sidebar() {
  return (
    <div className={style.sidebar}>
      <NavLink to='/Profile'>Profile</NavLink>
      <NavLink to='/Messages'>Messages</NavLink>
      <NavLink to='/Users'>Users</NavLink>
    </div>
  )
}

export default Sidebar
