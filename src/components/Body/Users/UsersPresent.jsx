import React from 'react'
import style from './UsersPresent.module.scss'
import {NavLink} from "react-router-dom";
import defLogo from '../../../accets/img/defLogo.png'
import * as axios from 'axios'

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
                                onClick={() => {
                                    axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`, {
                                        withCredentials: true,
                                        headers:{
                                            'API-KEY': '15bcd203-f87a-4606-9556-a1e8ecfb04be'
                                        }
                                    }).then(response => {
                                        if (!response.data.resultCode) {
                                            props.unfollow(user.id)
                                        }
                                    })


                                }}
                                    className={style.button}
                                    type='button'>
                                    unfollow
                                    </button>
                                    ) : (
                                    <button
                                    onClick={() => {

                                        axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`, {}, {
                                            withCredentials: true,
                                            headers:{
                                                'API-KEY': '15bcd203-f87a-4606-9556-a1e8ecfb04be'
                                            }
                                        }).then(response => {
                                            if (!response.data.resultCode) {
                                                props.follow(user.id)
                                            }
                                        })

                                    }}
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
