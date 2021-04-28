import {applyMiddleware, combineReducers, createStore} from 'redux'
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

const store = createStore(reducers,applyMiddleware(thunkMiddleWare))
window.store = store
export default store
