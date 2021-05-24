import React, {Suspense} from 'react'
import {Redirect, Route, Switch} from 'react-router-dom'
import ProfileContainer from './Profile/ProfileContainer'
import MessagesContainer from './Messages/MessagesContainer'
import LoginPageContainer from "./LoginPage/LoginPageContainer";
import Fetching from "../Fetching";


const Users = React.lazy(() => import('./Users/Users'))


function Body(props) {
    return <Suspense fallback={<Fetching/>}>
        <Switch>
            <Route exact path='/' render={() => <Redirect to={'/Profile'}/>}/>
            <Route path='/Profile/:userId?' render={() => <ProfileContainer/>}/>
            <Route path='/Messages' render={() => <MessagesContainer/>}/>
            <Route path='/Users' render={() => <Users/>}/>
            <Route path='/Login' render={() => <LoginPageContainer/>}/>
        </Switch>
    </Suspense>


}

export default Body
