import Posts from './Posts'
import { connect } from 'react-redux'

import {
  postChangeActionCreator,
  addNewPostActionCreator,
} from '../../../../redux/postsReducer'

function mapStateToProps(state) {
  return {
    postValue: state.Profile._currentPostText,
    posts: state.Profile.Posts,
  }
}
function mapDispatchtoProps(dispatch) {
  return {
    postChange: (value) => {
      dispatch(postChangeActionCreator(value))
    },
    addNewPost: () => {
      dispatch(addNewPostActionCreator())
    },
  }
}

const connectPostsContainer = connect(
  mapStateToProps,
  mapDispatchtoProps
)(Posts)

export default connectPostsContainer
