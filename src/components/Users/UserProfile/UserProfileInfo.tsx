import React, {ChangeEvent, useState} from 'react';
import s from "./UserProfile.module.css"
import Loading from "../../common/Conponents/Loading";
import {ProfileDataFormRedux} from "./ProfileDataForm";
import {ContactsType, ProfileDataType} from "../../../types/types";


type UserProfileInfoPropsType = {
    saveProfile: (profile: ProfileDataType) => Promise<any>
    profileData:  ProfileDataType
    isOwner: boolean
    savePhoto: (file: File) => void

}


function UserProfileInfo(props: UserProfileInfoPropsType) {
    let [editMode, setEditMode] = useState(false);
    let onMainPhotoSelected = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files?.length) {
            props.savePhoto(e.target.files[0]);
        }
    }

    if (!props.profileData) {
        return <Loading/>
    }
    const onSubmit = async (formData: ProfileDataType) => {
        await props.saveProfile(formData)
        setEditMode(false)
    };

    return <div>
        <img className={s.avatarPhoto}
             src={props.profileData.photos.large || "https://www.shareicon.net/data/512x512/2016/07/21/799325_user_512x512.png"}/>
        <div>{props.isOwner && <input type="file" onChange={onMainPhotoSelected}/>}</div>
        {editMode ?
            <ProfileDataFormRedux initialValues={props.profileData} {...props} onSubmit={onSubmit}/> :
            <ProfileData {...props} goToEditMode={() => {
                setEditMode(true)
            }}/>}
    </div>
}

type ProfileDataPropsType = {
    profileData:  ProfileDataType
    isOwner: boolean
    goToEditMode:()=>void
}

function ProfileData(props: ProfileDataPropsType) {
    let {profileData, isOwner, goToEditMode} = props;

    return <div>
        <h1>{profileData.fullName} </h1>
        <h4>About me: {profileData.lookingForAJobDescription}</h4>
        <div><b>Need work: </b> {profileData.lookingForAJob ? "yes" : "no"}</div>
        {profileData.lookingForAJob && <div><b>About job:</b> {profileData.lookingForAJobDescription}</div>}
        <div><b>Contacts:</b>{Object.keys(profileData.contacts).map((key) => {
            return <Contacts key={key} contactTitle={key}
                             contactValue={profileData.contacts[key as keyof ContactsType]}/>
        })}
        </div>
        {isOwner && <button onClick={goToEditMode}>Edit mode</button>}
    </div>
}

type ContactsPropsType= {
    contactTitle: string
    contactValue?: string
}

function Contacts(props: ContactsPropsType) {
    let {contactTitle, contactValue} = props;
    return <div className={s.contacts}><b>{contactTitle}</b> {contactValue}</div>
}

export default UserProfileInfo;

