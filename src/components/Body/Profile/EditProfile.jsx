import style from "./Profile.module.scss";
import {Formik, Form, Field} from 'formik';
import RenderContacts from "../../../redux/RenderContacts";

const EditProfile = ({currentUser, statusValue, loadFile, setStatus, upLoadProfile, toggleEditMode, editMode}) => {

    function changeFile(e) {
        loadFile(e.target.files[0])
    }

    return (
        <div>
            <label htmlFor="photo">change photo</label>
            <input id={'photo'} type="file" onChange={changeFile}/>

            <Formik
                initialValues={{
                    status: statusValue || '',
                    aboutMe: currentUser.aboutMe || '',
                    fullName: currentUser.fullName || '',
                    lookingForAJob: currentUser.lookingForAJob || '',
                    LookingForAJobDescription: currentUser.lookingForAJobDescription || '',
                    contacts: {...currentUser.contacts}
                }}
                onSubmit={async (values) => {
                    const {status} = values
                    console.log(values)
                    await setStatus(status)
                    await upLoadProfile(values)
                    toggleEditMode(editMode = !editMode)
                }}>
                {({isSubmitting, values}) => (
                    <Form>
                        <label htmlFor="status ">status</label>
                        <Field type='text' className={style.status} id={'status'} name="status"/>

                        <label htmlFor="fullName ">fullName</label>
                        <Field type="text" className={style.fullName} id={'fullName'} name="fullName"/>

                        <label htmlFor="aboutMe ">aboutMe</label>
                        <Field type="text" className={style.aboutMe} id={'aboutMe'} name="aboutMe"/>

                        <label htmlFor="lookingForAJob ">lookingForAJob</label>
                        <Field type="checkbox" id='lookingForAJob' name="lookingForAJob"/>
                        {values.lookingForAJob ? 'yes' : 'no'}<br/>

                        <label htmlFor="JobDescription ">JobDescription</label>
                        <Field type="text" className={style.JobDescription} id={'JobDescription'}
                               name="LookingForAJobDescription"/>

                        <RenderContacts contacts={values.contacts}/>

                        <button type="submit" disabled={isSubmitting}>

                            Submit

                        </button>

                    </Form>

                )}

            </Formik>

        </div>
    )
}

export default EditProfile;


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