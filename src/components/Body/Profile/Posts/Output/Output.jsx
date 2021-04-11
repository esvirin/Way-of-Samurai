import style from './Output.module.scss'
import React from 'react'
function Output(props) {
  return props.wall.map((post, idex) => {
    return (
      <div className={style.item} key={post.id}>
        {` ${post.time} : ${post.text}`}
      </div>
    )
  })
}

export default Output
