import React from 'react'
import styles from './header.module.scss'
import LoginContainer from "./Login/LoginContainer";


function Header() {
    return <div className={styles.header}>
        <div className={styles.logo}>
            &#127884; </div>
        <h1>Way of Samurai</h1>
        <LoginContainer/>
    </div>

}

export default Header
