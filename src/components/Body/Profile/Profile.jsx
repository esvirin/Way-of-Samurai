import style from './Profile.module.scss'
import React from 'react'
import PostsContainer from './Posts/PostsContainer'
function Profile(props) {
  return (
    <div className={style.Profile}>
      <div className={style.person}>
        <div className={style.photo}></div>
        <div className={style.info}>info</div>
      </div>
      <PostsContainer className={style.Posts} />
    </div>
  )
}

export default Profile
