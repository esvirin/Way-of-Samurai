import style from './Profile.module.scss'
import React from 'react'
import defLogo from '../../../accets/img/defLogo.png'

function Profile(props) {
    return (
        <div className={style.Profile}>
            <div className={style.person}>
                <img src={
                    props.currentUser.photos.small ? props.currentUser.photos.small : defLogo
                } className={style.photo} alt='user_photo'>{}</img>
                <div className={style.name}>{props.currentUser.fullName}</div>
                <div className={style.info}>{props.currentUser.aboutMe}</div>
                <div className={style.job}>{props.currentUser.lookingForAJob ? <div>Ронин</div> :
                    <div>Самурай</div>}</div>
                <div className={style.jobdescription}>{props.currentUser.lookingForAJobDescription}</div>

            </div>
        </div>
    )


}

export default Profile
