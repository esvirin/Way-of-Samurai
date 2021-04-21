import React from 'react'
import styles from './Login.module.scss'
import {NavLink} from "react-router-dom";

function Login(props) {
    if (props.data.login) {
        return <NavLink to={'/Profile/' + props.data.id} className={styles.isLogged}>{props.data.login}</NavLink>
    } else {
        return <NavLink to={'/Login'} className={styles.logging}>login</NavLink>
    }


}

export default Login