import React, {useEffect} from 'react'
import {NavLink} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {authMe, logoutMe} from "../../redux/authReducer";
import {selectAuthData, selectAuthIsLogged} from "../../redux/AuthSelector";
import {Button, Popconfirm, Space, Typography} from "antd";

const {Text} = Typography;

function Login() {
    const dispatch = useDispatch()
    const authData = useSelector(selectAuthData)
    const authIsLogged = useSelector(selectAuthIsLogged)
    const logout = () => logoutMe()
    useEffect(() => dispatch(authMe()), [dispatch])

    if (authIsLogged) {
        return <Space>
            <Text strong>{authData.login}</Text>
            <Popconfirm title="Are you sure to logout?" okText="Yes" cancelText="No">
                <Button onClick={logout} danger>logout</Button>
            </Popconfirm>

        </Space>


    } else {
        return <Button type={"primary"}><NavLink to={'/Login'}>login</NavLink></Button>
    }


}

export default Login