import style from './Posts.module.scss'
import React from 'react'
import Output from './Output/Output'

function Posts(props) {
  const referense = React.createRef()

  function postChanging() {
    let value = referense.current.value
    props.postChange(value)
  }
  return (
    <div className={style.Posts}>
      <input
        type='text'
        ref={referense}
        value={props.postValue}
        onChange={postChanging}
      />
      <button type='button' onClick={props.addNewPost}>
        add
      </button>
      <Output className={style.output} wall={props.posts} />
    </div>
  )
}

export default Posts
