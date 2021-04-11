import style from './Profile.module.scss'
import React from 'react'
import Posts from './Posts/Posts'
function Profile(props) {
  return (
    <div className={style.Profile}>
      <div className={style.person}>
        <div className={style.photo}>1</div>
        <div className={style.info}>info</div>
      </div>
      <Posts
        className={style.Posts}
        postValue={props.profile._currentPostText}
        posts={props.profile.Posts}
        disputch={props.disputch}
      />
    </div>
  )
}

export default Profile
