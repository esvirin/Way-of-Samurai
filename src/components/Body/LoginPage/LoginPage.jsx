import React from "react";
import styles from './LoginPage.module.scss'
import {Field, Form, Formik} from 'formik';

function LoginPage(props) {
    return <Formik
        initialValues={{
            email: '',
            password:'',
            rememberMe: false,
            captcha: false
        }}
        onSubmit={props.loginMe}
    >
        <Form className={styles.wrapper}>

            <label htmlFor="email">Login</label>
            <Field
                id="email"
                name="email"
                placeholder="email"
                type="email"
            />
            <label htmlFor="password">Password</label>
            <Field
                id="password"
                name="password"
                placeholder="password"
                type="password"
            />

            <span htmlFor="rememberMe">stay logged</span>
            <Field
                id="rememberMe"
                name="rememberMe"
                type="checkbox"
            />

            <button type="submit">Login</button>
        </Form>
    </Formik>
}

export default LoginPage