import React from 'react';
import s from "./UserProfile.module.css"
import UserProfileInfo from "./UserProfileInfo";
import UserProfileStatusHooks from "./UserProfileStatusHooks";
import UsersContainer from "../../Posts/PostsItem/PostItemContainer"

const UserProfile = (props) => {
    return <div className={s.profile}>
        <UserProfileInfo
            saveProfile={props.saveProfile}
            profileData={props.profileData}
            isOwner={props.isOwner}
            savePhoto={props.savePhoto}/>
        <UserProfileStatusHooks status={props.status}
                                updateProfileStatus={props.updateProfileStatus}
                                getProfileStatus={props.getProfileStatus}/>
        <UsersContainer/>
    </div>
}
export default UserProfile;
