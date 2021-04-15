import React from 'react'
import style from './Users.module.scss'

function Users(props) {
  return (
    <div>
      {props.users.map((user) => (
        <div key={user.id} className={style.users}>
          <div className={style.wrapper}>
            <div className={style.user}>
              <div className={style.avatar}></div>

              {user.followed ? (
                <button
                  onClick={() => props.unfollow(user.id)}
                  className={style.button}
                  type='button'>
                  unfollow
                </button>
              ) : (
                <button
                  onClick={() => props.follow(user.id)}
                  className={style.button}
                  type='button'>
                  follow
                </button>
              )}
            </div>
            <div className={style.description}>
              <div className={style.fullName}>{user.fullName}</div>
              <div className={style.location}>
                {`${user.location.city} ${user.location.country}`}
              </div>
              <div className={style.status}>{user.status}</div>
              {/* <div className={style.location}>{user.location}</div> */}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Users
