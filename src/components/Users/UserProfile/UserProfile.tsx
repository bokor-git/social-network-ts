import React from 'react';
import s from "./UserProfile.module.css"
import UserProfileInfo from "./UserProfileInfo";
import UserProfileStatusHooks from "./UserProfileStatusHooks";
import PostContainer from "../../Posts/PostsItem/PostItemContainer"
import {ProfileDataType} from "../../../types/types";

type UserProfilePropsType = {
    saveProfile: (profile: ProfileDataType) => Promise<any>
    profileData: ProfileDataType,
    isOwner: boolean
    savePhoto: (file: File) => void
    status: " " | string
    updateProfileStatus: (status: string) => void
    getProfileStatus: (userId: number | null) => void
}


const UserProfile = (props:UserProfilePropsType) => {


    return <div className={s.profile}>
        <UserProfileInfo
            saveProfile={props.saveProfile}
            profileData={props.profileData}
            isOwner={props.isOwner}
            savePhoto={props.savePhoto}/>
        <UserProfileStatusHooks status={props.status}
                                updateProfileStatus={props.updateProfileStatus}
                                getProfileStatus={props.getProfileStatus}/>
      <PostContainer/>
    </div>
}
export default UserProfile;
