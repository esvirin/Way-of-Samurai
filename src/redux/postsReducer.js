export function addNewPostActionCreator() {
  return { type: 'ADD-POST' }
}
export function postChangeActionCreator(value) {
  return { type: 'WATCH-POST', text: value }
}

function Posts(state, action) {
  switch (action.type) {
    case 'ADD-POST':
      if (!state._currentPostText.length) {
        return state
      }
      state.Posts.push({
        id: state.Posts.length,
        time: new Date().toLocaleString('ru'),
        text: state._currentPostText,
      })
      state._currentPostText = ''
      return state
    case 'WATCH-POST':
      state._currentPostText = action.text
      return state
    default:
      return state
  }
}
export default Posts
