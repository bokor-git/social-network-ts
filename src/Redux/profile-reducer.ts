import {profileAPI} from "../api/api";
import {stopSubmit} from "redux-form";


type ProfileDataType = {
    userId: number
    lookingForAJob?: boolean
    lookingForAJobDescription?: string
    fullName: string
    contacts?: {
        github?: string
        vk?: (string)
        facebook?: (string)
        instagram?: (string)
        twitter?: (string)
        website?: (string)
        youtube?: (string)
        mainLink?: (string)
    }
    photos?: {
    small?: string
    large?: string
}
}

type ProfileActionsType={
    type: typeof SET_USER_PROFILE | typeof  SET_STATUS_PROFILE | typeof SAVE_PHOTO_SUCCESS
    profileData?: ProfileDataType
    status?:string
    photos?:string
}


const SET_USER_PROFILE = "SET_USER_PROFILE"
const SET_STATUS_PROFILE = "SET_STATUS_PROFILE"
const SAVE_PHOTO_SUCCESS = "SAVE_PHOTO_SUCCESS"


export const setProfileDate = (profileData:ProfileDataType):ProfileActionsType => ({type: SET_USER_PROFILE, profileData: profileData});
export const setStatusProfile = (status:string):ProfileActionsType => ({type: SET_STATUS_PROFILE, status: status});
export const savePhotoSuccess = (photos:string):ProfileActionsType => ({type: SAVE_PHOTO_SUCCESS, photos:photos});
type InitialStateType={
    profileData: null| ProfileDataType
    status: ""| string
}

let initialState:InitialStateType = {
    profileData: null,
    status: ""
};

const myProfileReducer = (state = initialState, action:ProfileActionsType) => {
    switch (action.type) {
        case SET_USER_PROFILE: {
            return {
                ...state,
                profileData: action.profileData
            }
        }
        case SET_STATUS_PROFILE: {
            return {
                ...state,
                status: action.status
            }
        }
        case SAVE_PHOTO_SUCCESS: {
            return {
                ...state,
                profileData: {...state.profileData, photos: action.photos }
            }
        }
        default:
            return state
    }
};
export const getProfileInfo = (userId:number) => async (dispatch:any) => {
    const response = await profileAPI.getProfile(userId)
    dispatch(setProfileDate(response.data))

};

export const getProfileStatus = (userId:number) => async (dispatch:any) => {
    const response = await profileAPI.getStatus(userId);
    dispatch(setStatusProfile(response.data))

};


export const updateProfileStatus = (status:string) => async (dispatch:any) => {
   try { const response = await profileAPI.updateStatus(status);
    if (response.data.resultCode === 0)
        dispatch(setStatusProfile(status))}
        catch (error) {
       debugger
            console.log(error.response.status);
        }
};
export const savePhoto = (file:File) => async (dispatch:any) => {
    const response = await profileAPI.savePhoto(file);
  if (response.data.resultCode === 0)
  {dispatch(savePhotoSuccess(response.data.data.photos))}
};

export const saveProfile = (profile:ProfileDataType) => async (dispatch:any, getState:any) => {
    let userId = getState().auth.userID;
    const response = await profileAPI.saveProfile(profile);
    if (response.data.resultCode === 0) {
        dispatch(getProfileInfo(userId))
    } else {dispatch(stopSubmit("edit-profile", {_error: response.data.messages[0]}))
    return Promise.reject(response.data.messages[0])}
}

export default myProfileReducer;