import React from 'react'
import './App.css'
import Body from './components/Body/Body'
import Header from './components/Header/Header'
import Fetching from "./components/Fetching";
import {connect} from "react-redux";


function App(props) {
    return (
        <div className='App'>
            {props.isFetching && <Fetching/>}
            <Header/>
            <Body/>
        </div>
    )
}

const mapStateToProps = (state)=>{
   return {
       isFetching : state.Fetching.isFetching
   }
}

export default connect(mapStateToProps,{})(App)
