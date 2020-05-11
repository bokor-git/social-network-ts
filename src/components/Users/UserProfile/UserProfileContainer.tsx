import {connect} from "react-redux";
import UserProfile from "./UserProfile";
import React from "react";
import {
    getProfileInfo,
    getProfileStatus,
    savePhoto,
    saveProfile,
    updateProfileStatus
} from "../../../Redux/profile-reducer";
import {withRouter} from "react-router-dom";
import {compose} from "redux";
import {ProfileDataType} from "../../../types/types";
import {AppStateType} from "../../../Redux/redux-store";

type MapStateToPropsType = {
    profileData:  ProfileDataType
    status: " " | string
    authUserId: number
}

type MapDispatchToProps = {
    getProfileStatus: (userId: number| null)=>void
    updateProfileStatus: (status: string)=>void
    getProfileInfo: (userId: number|null)=>void
    savePhoto: (file: File)=>void
    saveProfile: (profile: ProfileDataType)=>void
}



class MyProfileContainerAPI extends React.Component<MapStateToPropsType&MapDispatchToProps> {
    refreshProfile() {
        // @ts-ignore
        let userId:number = this.props.match.params.userID;
        if (!userId) {
            userId = this.props.authUserId
            if (!userId) {
                // @ts-ignore
                this.props.history.push("/login")
            }
        }
        this.props.getProfileInfo(userId);
        this.props.getProfileStatus(userId)
    }

    componentDidMount() {
        this.refreshProfile()
    }

    componentDidUpdate(prevProps:any, prevState:any, snapshot:any) {
        if (this.props.status != prevProps.status) {
            this.refreshProfile()
        }
    }

    render() {

        return <UserProfile
            saveProfile={this.props.saveProfile}
            savePhoto={this.props.savePhoto}
            // @ts-ignore
            isOwner={!this.props.match.params.userID}
            profileData={this.props.profileData}
            status={this.props.status}
            updateProfileStatus={this.props.updateProfileStatus}
            getProfileStatus={this.props.getProfileStatus}/>
    }
}

let mapStateToProps = (state:AppStateType) => {
    return {
        // @ts-ignore
        profileData: state.myProfilePage.profileData,
        // @ts-ignore
        status: state.myProfilePage.status,
        authUserId: state.auth.userID
    }
};


export default compose(
    connect<MapStateToPropsType,MapDispatchToProps,{},AppStateType>
        // @ts-ignore
    (mapStateToProps, {getProfileStatus, updateProfileStatus, getProfileInfo, savePhoto, saveProfile}),
    withRouter)
    // @ts-ignore
(MyProfileContainerAPI)


