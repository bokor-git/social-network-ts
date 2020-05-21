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
import {RouteComponentProps, withRouter} from "react-router-dom";
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
    savePhoto: (file: File)=>Promise<any>
    saveProfile: (profile: ProfileDataType)=>Promise<any>
}

type PathParamsType = {
    userID: string
}

type PropsType = MapStateToPropsType & MapDispatchToProps & RouteComponentProps<PathParamsType>;

class MyProfileContainerAPI extends React.Component<PropsType> {
    refreshProfile() {
        let userId: number|null = +this.props.match.params.userID;
        if (!userId) {
            userId = this.props.authUserId
            if (!userId) {
                this.props.history.push("/login")
            }
        }
        this.props.getProfileInfo(userId);
        this.props.getProfileStatus(userId)
    }

    componentDidMount() {
        this.refreshProfile()
    }

    componentDidUpdate(prevProps:PropsType, prevState:PropsType, snapshot:any) {
        if (this.props.status != prevProps.status) {
            this.refreshProfile()
        }
    }

    render() {

        return <UserProfile
            saveProfile={this.props.saveProfile}
            savePhoto={this.props.savePhoto}
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


export default compose<React.ComponentType>(
    connect(mapStateToProps, {getProfileStatus, updateProfileStatus, getProfileInfo, savePhoto, saveProfile}),
    withRouter)
(MyProfileContainerAPI)


