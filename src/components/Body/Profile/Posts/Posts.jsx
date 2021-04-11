import style from './Posts.module.scss'
import React from 'react'
import Output from './Output/Output'

function Posts(props) {
  const referense = React.createRef()

  function postChange() {
    let value = referense.current.value
    //props.watchPost(value)
    props.disputch({ type: 'watchPost', text: value })
  }

  function addNewPost() {
    props.disputch({ type: 'addPost' })
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
