import style from './Profile.module.scss'
import React, {useEffect, useState} from 'react'
import defLogo from '../../../accets/img/defLogo.png'


function Profile(props) {
    console.log(props)

    const [editMode, changeEditMode] = useState(false)
    const [status, changeStatus] = useState(props.statusValue)

    useEffect(()=>{changeStatus(changeStatus)},[props.statusValue])

    return (
        <div className={style.Profile}>
            <div className={style.person}>
                <img src={
                    props.currentUser.photos.small ? props.currentUser.photos.small : defLogo
                } className={style.photo} alt='user_photo'>{}</img>
                <div className={style.name}>{props.currentUser.fullName}</div>

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
                           props.setStatus(status)
                       }}
                />


                }

                <div className={style.info}>{props.currentUser.aboutMe}</div>
                <div className={style.job}>{props.currentUser.lookingForAJob ? <div>Ронин</div> :
                    <div>Самурай</div>}</div>
                <div className={style.jobdescription}>{props.currentUser.lookingForAJobDescription}</div>

            </div>
        </div>
    )
}


export default Profile
