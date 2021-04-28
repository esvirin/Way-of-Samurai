import React from 'react'
import styles from './Login.module.scss'
import {NavLink} from "react-router-dom";

function Login(props) {

    if (props.isLogged) {
        return <span>
        <NavLink to={'/Profile/' + props.data.id} className={styles.isLogged}>{props.data.login}</NavLink>
          <button onClick={props.logoutMe}>logout</button>
            </span>
    } else {
        return <NavLink to={'/Login'} className={styles.logging}>login</NavLink>
    }


}

export default Login