import {applyMiddleware, combineReducers, compose, createStore} from 'redux'
import profileReducer from './profileReducer'
import usersReducer from './usersReducer'
import authReducer from './authReducer'
import thunkMiddleWare from 'redux-thunk'
import isFetchingReducer from "./isFetchingReducer";

const reducers = combineReducers({
    Profile: profileReducer,
    Users: usersReducer,
    Auth: authReducer,
    Fetching: isFetchingReducer
})


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(
    applyMiddleware(thunkMiddleWare)
));


export default store
