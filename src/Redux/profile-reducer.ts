import {profileAPI} from "../api/api";
import {stopSubmit} from "redux-form";
import {ProfileDataType} from "../types/types"
import {ThunkAction} from "redux-thunk";
import {AppStateType} from "./redux-store";


const SET_USER_PROFILE = "SET_USER_PROFILE"
const SET_STATUS_PROFILE = "SET_STATUS_PROFILE"
const SAVE_PHOTO_SUCCESS = "SAVE_PHOTO_SUCCESS"


type SetProfileDataActionType = {
    type: typeof SET_USER_PROFILE
    profileData: ProfileDataType
}
export const setProfileDate = (profileData: ProfileDataType): SetProfileDataActionType => ({
    type: SET_USER_PROFILE,
    profileData: profileData
});

type SetStatusProfileActionType = {
    type: typeof SET_STATUS_PROFILE
    status:string
}
export const setStatusProfile = (status: string): SetStatusProfileActionType => ({type: SET_STATUS_PROFILE, status: status});

type SavePhotoSuccessActionType = {
    type: typeof SAVE_PHOTO_SUCCESS
    photos: string
}
export const savePhotoSuccess = (photos: string): SavePhotoSuccessActionType => ({type: SAVE_PHOTO_SUCCESS, photos: photos});


let initialState = {
    profileData: null as null | ProfileDataType,
    status: " " as " " | string
};

type InitialStateType = typeof initialState

type ProfileActionsType = SetProfileDataActionType | SetStatusProfileActionType | SavePhotoSuccessActionType

const myProfileReducer = (state = initialState, action: ProfileActionsType) => {
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
                profileData: {...state.profileData, photos: action.photos}
            }
        }
        default:
            return state
    }
};

type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ProfileActionsType>

export const getProfileInfo = (userId: number|null):ThunkType => async (dispatch) => {
    const response = await profileAPI.getProfile(userId)
    dispatch(setProfileDate(response.data))

};

export const getProfileStatus = (userId: number):ThunkType => async (dispatch) => {
    const response = await profileAPI.getStatus(userId);
    dispatch(setStatusProfile(response.data))

};


export const updateProfileStatus = (status: string):ThunkType => async (dispatch) => {
    try {
        const response = await profileAPI.updateStatus(status);
        if (response.data.resultCode === 0)
            dispatch(setStatusProfile(status))
    } catch (error) {
        console.log(error.response.status);
    }
};
export const savePhoto = (file: File):ThunkType => async (dispatch) => {
    const response = await profileAPI.savePhoto(file);
    if (response.data.resultCode === 0) {
        dispatch(savePhotoSuccess(response.data.data.photos))
    }
};

type stopSubmitType = {
    form:string
    errors:any
}
export const saveProfile = (profile: ProfileDataType):ThunkType => async (dispatch, getState) => {
    let userId = getState().auth.userID;
    const response = await profileAPI.saveProfile(profile);
    if (response.data.resultCode === 0) {
        dispatch(getProfileInfo(userId))
    } else {
        // @ts-ignore
        dispatch(stopSubmit("edit-profile", {_error: response.data.messages[0]}))
        return Promise.reject(response.data.messages[0])
    }
}

export default myProfileReducer;