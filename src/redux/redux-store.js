import { combineReducers, createStore } from 'redux'
import postsReducer from './postsReducer'
import usersReducer from './usersReducer'

let reducers = combineReducers({
  Profile: postsReducer,
  Users: usersReducer,
})

let store = createStore(reducers)
window.store = store
export default store
