import style from './Posts.module.scss'
import React from 'react'
import Output from './Output/Output'
import {
  postChangeActionCreator,
  addNewPostActionCreator,
} from '../../../../redux/postsReducer'

function Posts(props) {
  const referense = React.createRef()

  function postChange() {
    props.disputch(postChangeActionCreator(referense.current.value))
  }

  function addNewPost() {
    props.disputch(addNewPostActionCreator())
  }
  return (
    <div className={style.Posts}>
      <input
        type='text'
        ref={referense}
        value={props.postValue}
        onChange={postChange}
      />
      <button type='button' onClick={addNewPost}>
        add
      </button>
      <Output className={style.output} wall={props.posts} />
    </div>
  )
}

export default Posts
