import React from 'react'
import styles from './header.module.scss'
import LoginContainer from "./Login/LoginContainer";
import logo from '../../accets/img/logo.png'

function Header() {
    return <div className={styles.header}>
        <img className={styles.logo} src={logo} alt="logo"/>
        <h1>Way of Samurai</h1>
        <LoginContainer/>
    </div>

}

export default Header
