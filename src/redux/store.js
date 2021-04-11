import postsReducer from './postsReducer'

const store = {
  _state: {
    Profile: {
      Posts: [],
      _currentPostText: '',
    },
    Messages: {},
  },

  _callSubscriber() {},

  subscribe(observer) {
    this._callSubscriber = observer
  },
  disputch(action) {
    this._state.Profile = postsReducer(this._state.Profile, action)
    this._callSubscriber(this._state)
  },
  getState() {
    return this._state
  },
}

export default store
