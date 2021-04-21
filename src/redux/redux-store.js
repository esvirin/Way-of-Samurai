import { combineReducers, createStore } from 'redux'
import profileReducer from './profileReducer'
import usersReducer from './usersReducer'
import authReducer from './authReducer'

let reducers = combineReducers({
  Profile: profileReducer,
  Users: usersReducer,
  Auth: authReducer
})

let store = createStore(reducers)
window.store = store
export default store
