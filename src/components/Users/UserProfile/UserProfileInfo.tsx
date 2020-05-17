import React, {ChangeEvent, useState} from 'react';
import s from "./UserProfile.module.css"
import Loading from "../../common/Conponents/Loading";
import {ProfileDataFormRedux} from "./ProfileDataForm";
import {ContactsType, ProfileDataType} from "../../../types/types";


type UserProfileInfoPropsType = {
    saveProfile: (profile: ProfileDataType) => void
    profileData:  ProfileDataType,
    isOwner: boolean
    savePhoto: (file: File) => void

}

const UserProfileInfo = (props:UserProfileInfoPropsType) => {
    let [editMode, setEditMode] = useState(false);
    let onMainPhotoSelected = (e:any) => {
        if (e.target.files.length) {
            props.savePhoto(e.target.files[0]);
        }
    }

    if (!props.profileData) {
        return <Loading/>
    }
    const onSubmit = async (formData:any) => {
       await props.saveProfile(formData)
         await   setEditMode(false)
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

type ProfileDataPropsType = {
    profileData:  ProfileDataType,
    isOwner: boolean
    goToEditMode:()=>void
}
type KeyType = keyof ContactsType
const ProfileData = ({profileData, isOwner, goToEditMode}:ProfileDataPropsType) => {

    return <div>
        <h1>{profileData.fullName} </h1>
        <h4>About me: {profileData.lookingForAJobDescription}</h4>
        <div><b>Need work: </b> {profileData.lookingForAJob ? "yes" : "no"}</div>
        {profileData.lookingForAJob && <div><b>About job:</b> {profileData.lookingForAJobDescription}</div>}
        // @ts-ignore
        <div><b>Contacts:</b>{Object.keys(profileData.contacts).map((key:KeyType) => {
            return <Contacts key={key} contactTitle={key} contactValue={profileData.contacts[key]}/>
        })}
        </div>
        {isOwner && <button onClick={goToEditMode}>Edit mode</button>}
    </div>
}

type ContactsPropsType= {
    contactTitle: KeyType
    contactValue: string | undefined
}
const Contacts = ({contactTitle, contactValue}:ContactsPropsType) => {
    return <div className={s.contacts}><b>{contactTitle}</b> {contactValue}</div>
}

export default UserProfileInfo;

