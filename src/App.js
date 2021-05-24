import React, {useState} from 'react'
import Body from './components/Body/Body'
import {connect} from "react-redux";
import {Col, Layout, Menu, Row} from 'antd';
import {
    UserOutlined,
    MessageOutlined,
    UsergroupAddOutlined
} from '@ant-design/icons';
import {NavLink} from "react-router-dom";
import Login from "./components/Header/Login";

const {Header, Content, Footer, Sider} = Layout;

function App() {
    const [collapsed, collapse] = useState(false)
    const onCollapse = () => {
        collapse(!collapsed)
    }
    return <Layout style={{minHeight: '100vh'}}>

        <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
            <div style={{marginLeft: 18, fontSize: '2rem'}}> &#127884; </div>
            <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                <Menu.Item key="1" icon={<UserOutlined/>}>
                    <NavLink to='/Profile'>Profile</NavLink>
                </Menu.Item>
                <Menu.Item key="2" icon={<MessageOutlined/>}>
                    <NavLink to='/Messages'>Messages</NavLink>
                </Menu.Item>
                <Menu.Item key="3" icon={<UsergroupAddOutlined/>}>
                    <NavLink to='/Users'>Users</NavLink>
                </Menu.Item>
            </Menu>
        </Sider>

        <Layout className="site-layout">
            <Header className="site-layout-background" style={{padding: 0}}>
                <Row>
                    <Col span={8} offset={16}>
                        <Login/>
                    </Col>
                </Row>

            </Header>
            <Content style={{margin: '16px 16px'}}>
                <Body className="site-layout-background" style={{ minHeight: 360}}/>
            </Content>
            <Footer style={{textAlign: 'center'}}>Way of Samurai ©2021 Created by esvirin@mail.com</Footer>
        </Layout>
    </Layout>

    // return (
    //     <div className='App'>
    //         {props.isFetching && <Fetching/>}
    //         <HeaderBar/>
    //         <Body/>
    //     </div>
    // )
}

const mapStateToProps = (state) => {
    return {
        isFetching: state.Fetching.isFetching
    }
}

export default connect(mapStateToProps, {})(App)

