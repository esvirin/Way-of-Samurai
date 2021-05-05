import React from 'react';
import style from "./Profile.module.scss";

const ShowContacts = ({contacts}) => {
    return Object.keys(contacts).map((item,idx)=>{
        return <div key={idx} className={style.contact} >
            {item} : <span>{contacts[item]}</span>
        </div>
    })

};

export default ShowContacts;

//    contacts: {
//         facebook: "",
//         website: "",
//         vk: "",
//         twitter: "",
//         instagram: "",
//     }
