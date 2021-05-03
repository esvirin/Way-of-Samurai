import React from 'react';
import style from "../components/Body/Profile/Profile.module.scss";
import {Field} from "formik";

const RenderContacts = (props) => {
    return Object.keys(props.contacts).map((contact, idx) => {
        return <div key={idx} className={style.contact}>
            <label htmlFor={contact}>{contact}</label>
            <Field type="text" value={props.contacts[contact] || ''} id={contact} name={`contacts.${contact}`}/>
        </div>

    })
};

export default RenderContacts;