import {ResponseResultCode} from "../api/api";
import {stopSubmit} from "redux-form";
import {PhotosType, ProfileDataType} from "../types/types"
import {ThunkAction} from "redux-thunk";
import {AppStateType, InferActionTypes} from "./redux-store";
import {profileAPI} from "../api/profile-api";


let initialState = {
    profileData: null as null | ProfileDataType,
    status: " " as " " | string
};

type InitialStateType = typeof initialState

export const actions = {
    setProfileDate: (profileData: ProfileDataType) => ({type: "SET_USER_PROFILE", profileData: profileData} as const),
    setStatusProfile: (status: string) => ({type: "SET_STATUS_PROFILE", status: status} as const),
    savePhotoSuccess: (photos: PhotosType) => ({type: "SAVE_PHOTO_SUCCESS", photos: photos} as const)
}


type ActionsType = InferActionTypes<typeof actions>

const myProfileReducer = (state = initialState, action: ActionsType) => {
    switch (action.type) {
        case "SET_USER_PROFILE": {
            return {
                ...state,
                profileData: action.profileData
            }
        }
        case "SET_STATUS_PROFILE": {
            return {
                ...state,
                status: action.status
            }
        }
        case "SAVE_PHOTO_SUCCESS": {
            return {
                ...state,
                profileData: {...state.profileData, photos: action.photos}
            }
        }
        default:
            return state
    }
};

type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsType>

export const getProfileInfo = (userId: number | null): ThunkType => async (dispatch) => {
    const data = await profileAPI.getProfile(userId)
    dispatch(actions.setProfileDate(data))

};

export const getProfileStatus = (userId: number): ThunkType => async (dispatch) => {
    const data = await profileAPI.getStatus(userId);
    dispatch(actions.setStatusProfile(data))

};


export const updateProfileStatus = (status: string): ThunkType => async (dispatch) => {
    try {
        const response = await profileAPI.updateStatus(status);
        if (response.data.resultCode === ResponseResultCode.Success)
            dispatch(actions.setStatusProfile(status))
    } catch (error) {
        console.log(error.response.status);
    }
};
export const savePhoto = (file: File): ThunkType => async (dispatch) => {
    const response = await profileAPI.savePhoto(file);
    if (response.data.resultCode === ResponseResultCode.Success) {
        dispatch(actions.savePhotoSuccess(response.data.data.photos))
    }
};

export const saveProfile = (profile: ProfileDataType): ThunkType => async (dispatch, getState) => {
    let userId = getState().auth.userID;
    const response = await profileAPI.saveProfile(profile);
    if (response.data.resultCode === ResponseResultCode.Success) {
        dispatch(getProfileInfo(userId))
    } else {
        // @ts-ignore
        dispatch(stopSubmit("edit-profile", {_error: response.data.messages[0]}))
        return Promise.reject(response.data.messages[0])
    }
}

export default myProfileReducer;