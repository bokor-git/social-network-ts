import React, {useState} from 'react';
import s from "./UserProfile.module.css"
import Loading from "../../common/Conponents/Loading";
import {ProfileDataFormRedux} from "./ProfileDataForm";


const UserProfileInfo = (props) => {
    let [editMode, setEditMode] = useState(false);
    let onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            props.savePhoto(e.target.files[0]);
        }
    }

    if (!props.profileData) {
        return <Loading/>
    }
    const onSubmit = (formData) => {
        props.saveProfile(formData).then(
            ()=>{setEditMode(false)})
    };

    return <div>
        <img className={s.avatarPhoto}
             src={props.profileData.photos.large || "https://www.shareicon.net/data/512x512/2016/07/21/799325_user_512x512.png"}/>
        <div>{props.isOwner && <input type="file" onChange={onMainPhotoSelected}/>}</div>
        {editMode ?
            <ProfileDataFormRedux initialValues={props.profileData} {...props} onSubmit={onSubmit}/> :
            <ProfileData {...props} goToEditMode={()=>{setEditMode(true)}}/>}
    </div>
};

const ProfileData = (props) => {
    return <div>
        <h1>{props.profileData.fullName} </h1>
        <h4>About me: {props.profileData.aboutMe}</h4>
        <div><b>Need work: </b> {props.profileData.lookingForAJob ? "yes" : "no"}</div>
        {props.profileData.lookingForAJob && <div><b>About job:</b> {props.profileData.lookingForAJobDescription}</div>}
        <div><b>Contacts:</b>{Object.keys(props.profileData.contacts).map(key => {
            return <Contacts key={key} contactTitle={key} contactValue={props.profileData.contacts[key]}/>
        })}
        </div>
        {props.isOwner && <button onClick={props.goToEditMode}>Edit mode</button>}
    </div>
}


const Contacts = ({contactTitle, contactValue}) => {
    return <div className={s.contacts}><b>{contactTitle}</b> {contactValue}</div>
}

export default UserProfileInfo;

