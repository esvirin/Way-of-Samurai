import {applyMiddleware, combineReducers, createStore} from 'redux'
import profileReducer from './profileReducer'
import usersReducer from './usersReducer'
import authReducer from './authReducer'
import thunkMiddleWare from 'redux-thunk'

let reducers = combineReducers({
  Profile: profileReducer,
  Users: usersReducer,
  Auth: authReducer
})

let store = createStore(reducers,applyMiddleware(thunkMiddleWare))
window.store = store
export default store
