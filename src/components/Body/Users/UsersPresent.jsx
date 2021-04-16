import React from 'react'
import style from './UsersPresent.module.scss'

function UsersPresent(props) {
  const totalPages = Math.ceil(props.totalUsersCount / props.pageSize)
  const pagesArr = []
  for (let i = 1; i <= totalPages; i++) {
    pagesArr.push(i)
  }

  return (
    <div className={style.users}>
      <div className={style.pagination}>
        {pagesArr.map((item) => {
          return (
            <span
              onClick={() => props.displayCurrentPage(item)}
              className={
                props.currentPage === item ? style.pagactive : style.pagin
              }>
              {item}
            </span>
          )
        })}
      </div>
      {props.users.map((user) => (
        <div key={user.id} className={style.userWrapper}>
          <div className={style.user}>
            <img
              className={style.avatar}
              src={
                user.photos.small
                  ? user.photos.small
                  : 'https://i.ya-webdesign.com/images/person-svg-circle-icon-1.png'
              }
              alt='user_photo'
            />

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
            <div className={style.name}>{user.name}</div>
            <div className={style.status}>{user.status}</div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default UsersPresent
