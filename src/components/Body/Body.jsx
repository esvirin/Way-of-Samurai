import React, {Suspense} from 'react'
import {Redirect, Route, Switch} from 'react-router-dom'
import style from './body.module.scss'
import ProfileContainer from './Profile/ProfileContainer'
import Sidebar from './Sidebar/Sidebar'
import MessagesContainer from './Messages/MessagesContainer'
import LoginPageContainer from "./LoginPage/LoginPageContainer";
import Fetching from "../Fetching";

const UsersContainer = React.lazy(() => import('./Users/UsersContainer'))


function Body(props) {
    return (
        <div className={style.body}>
            <Suspense fallback={<Fetching/>}>
                <Sidebar/>
                <Switch>
                    <Route exact path='/' render={() => <Redirect to={'/Profile'}/>}/>
                    <Route path='/Profile/:userId?' render={() => <ProfileContainer/>}/>
                    <Route path='/Messages' render={() => <MessagesContainer/>}/>
                    <Route path='/Users' render={() => <UsersContainer/>}/>
                    <Route path='/Login' render={() => <LoginPageContainer/>}/>
                </Switch>
            </Suspense>
        </div>
    )
}

export default Body
