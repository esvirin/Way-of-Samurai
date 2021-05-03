import style from './Profile.module.scss'
import React, {useState} from 'react'
import defLogo from '../../../accets/img/defLogo.png'
import ShowContacts from "./ShowContacts";
import EditProfile from "./EditProfile";


function Profile({statusValue, currentUser, setStatus, loadFile, upLoadProfile}) {

    let [editMode, toggleEditMode] = useState(false)

    return <div className={style.person}>
        {!editMode &&
        <span onClick={() => {
            toggleEditMode(editMode = !editMode)
        }}>редактировать</span>
        }
        {editMode &&
        <span onClick={() => {
            toggleEditMode(editMode = !editMode)
        }}>закрыть</span>
        }


        {editMode && <EditProfile
            setStatus={setStatus}
            loadFile={loadFile}
            statusValue={statusValue}
            currentUser={currentUser}
            upLoadProfile={upLoadProfile}
            toggleEditMode={toggleEditMode}
            editMode={editMode}
        />}
        <img src={
            currentUser.photos.small ? currentUser.photos.small : defLogo
        } className={style.photo} alt='user_photo'>{}</img>
        <div className={style.name}>{currentUser.fullName}</div>
        <span className={style.status}>{statusValue || 'without status'}</span>
        <div className={style.info}>{currentUser.aboutMe}</div>
        <div className={style.job}>{currentUser.lookingForAJob ? <div>Ронин</div> :
            <div>Самурай</div>}</div>
        <div className={style.jobdescription}>{currentUser.lookingForAJobDescription}</div>
        <ShowContacts contacts={currentUser.contacts}/>

    </div>
}


export default Profile


// currentUser: {
//     aboutMe: "",
//    contacts: {
//         facebook: "",
//             website: "",
//             vk: "",
//             twitter: "",
//             instagram: "",
//     },
//     fullName: "",
//         lookingForAJob: false,
//         lookingForAJobDescription: "",
//         photos: {
//         small: "https://i.ya-webdesign.com/images/person-svg-circle-icon-1.png",
//             large: 'https://i.ya-webdesign.com/images/person-svg-circle-icon-1.png'
//     }