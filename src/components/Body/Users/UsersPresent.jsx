import React from 'react'
import style from './UsersPresent.module.scss'
import {NavLink} from "react-router-dom";
import defLogo from '../../../accets/img/defLogo.png'
import {userAPI} from "../../../api/api";

function UsersPresent(props) {
    const totalPages = Math.ceil(props.totalUsersCount / props.pageSize)
    const pagesArr = []
    for (let i = 1; i <= totalPages; i++) {
        pagesArr.push(i)
    }

    return (
        <div className={style.users}>
            <div className={style.pagination}>
                {pagesArr.map((item, idx) => {
                    return (
                        <span
                            key={idx}
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
                        <NavLink to={'/Profile/' + user.id}> <img
                            className={style.avatar}
                            src={
                                user.photos.small
                                    ? user.photos.small
                                    : defLogo
                            }
                            alt='user_photo'
                        /></NavLink>

                        {user.followed ? (
                            <button
                                onClick={() => { props.followUser(false, user.id) }}
                                className={style.button}
                                type='button'>
                                dislike
                            </button>
                        ) : (
                            <button
                                onClick={() => { props.followUser(true, user.id) }}
                                className={style.button}
                                type='button'>
                                like
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
