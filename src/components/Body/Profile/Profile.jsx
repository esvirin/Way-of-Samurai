import style from './Profile.module.scss'
import React, {useEffect, useState} from 'react'
import defLogo from '../../../accets/img/defLogo.png'


function Profile({statusValue,  currentUser, setStatus}) {


    const [editMode, changeEditMode] = useState(false)
    const [status, changeStatus] = useState(statusValue)

    useEffect(()=>{changeStatus(changeStatus)},[statusValue])

    return (
        <div className={style.Profile}>
            <div className={style.person}>
                <img src={
                    currentUser.photos.small ? currentUser.photos.small : defLogo
                } className={style.photo} alt='user_photo'>{}</img>
                <div className={style.name}>{currentUser.fullName}</div>

                {!editMode &&
                <span className={style.status}
                      onClick={() => {
                          changeEditMode(true)
                      }}
                >{status || 'without status'}</span>}

                {editMode &&
                <input className={style.status}
                       type='text'
                       value={status}
                       onChange={ (event)=>{ changeStatus(event.target.value) } }
                       autoFocus={true}
                       onBlur={() => {
                           changeEditMode(false)
                           setStatus(status)
                       }}
                />


                }

                <div className={style.info}>{currentUser.aboutMe}</div>
                <div className={style.job}>{currentUser.lookingForAJob ? <div>Ронин</div> :
                    <div>Самурай</div>}</div>
                <div className={style.jobdescription}>{currentUser.lookingForAJobDescription}</div>

            </div>
        </div>
    )
}


export default Profile
