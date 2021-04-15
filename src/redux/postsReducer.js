export function addNewPostActionCreator() {
  return { type: 'ADD-POST' }
}
export function postChangeActionCreator(value) {
  return { type: 'WATCH-POST', text: value }
}

const initialState = { Posts: [], _currentPostText: '' }

function Posts(state = initialState, action) {
  let newState = { ...state }
  newState.Posts = [...state.Posts]
  newState._currentPostText = [...state._currentPostText]

  switch (action.type) {
    case 'ADD-POST':
      if (!newState._currentPostText.length) {
        return newState
      }

      newState.Posts.push({
        id: state.Posts.length,
        time: new Date().toLocaleString('ru'),
        text: state._currentPostText,
      })
      newState._currentPostText = ''
      return newState

    case 'WATCH-POST':
      newState._currentPostText = action.text
      return newState

    default:
      return newState
  }
}
export default Posts
