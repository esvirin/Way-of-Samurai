import React from 'react';

const ShowContacts = ({contacts}) => {
    return Object.keys(contacts).map((item,idx)=>{
        return <div key={idx}>
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
