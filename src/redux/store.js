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
    if (action.type === 'addPost') {
      if (!this._state.Profile._currentPostText.length) {
        return
      }
      this._state.Profile.Posts.push({
        id: this._state.Profile.Posts.length,
        time: new Date().toLocaleString('ru'),
        text: this._state.Profile._currentPostText,
      })
      this._state.Profile._currentPostText = ''
      this._callSubscriber(this._state)
    } else if (action.type === 'watchPost') {
      this._state.Profile._currentPostText = action.text
      this._callSubscriber(this._state)
    } else {
      return this._state
    }
  },
  getState() {
    return this._state
  },
}

export default store
