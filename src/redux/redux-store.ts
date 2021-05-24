import {applyMiddleware, combineReducers, compose, createStore} from 'redux'
import profileReducer from './profileReducer'
import usersReducer from './usersReducer'
import authReducer from './authReducer'
import thunkMiddleWare from 'redux-thunk'
import isFetchingReducer from "./isFetchingReducer";

const appReducer = combineReducers({
    Profile: profileReducer,
    Users: usersReducer,
    Auth: authReducer,
    Fetching: isFetchingReducer
})

type appReducerType = typeof appReducer
export type appStateType = ReturnType<appReducerType>

type PropertiesTypes<T> = T extends {[key:string]: infer U} ? U : never
export type  InferActionsTypes<T extends {[key:string]: (...args: any[]) => any}> = ReturnType<PropertiesTypes<T>>

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(appReducer, composeEnhancers(
    applyMiddleware(thunkMiddleWare)
));


export default store
