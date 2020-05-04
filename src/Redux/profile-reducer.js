import {profileAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_USER_PROFILE = "SET_USER_PROFILE"
const SET_STATUS_PROFILE = "SET_STATUS_PROFILE"
const SAVE_PHOTO_SUCCESS = "SAVE_PHOTO_SUCCESS"
// action creators


export const setProfileDate = (profileData) => ({type: SET_USER_PROFILE, profileData});
export const setStatusProfile = (status) => ({type: SET_STATUS_PROFILE, status});
export const savePhotoSuccess = (photos) => ({type: "SAVE_PHOTO_SUCCESS", photos});
let initialState = {
    profileData: null,
    status: ""
};

const myProfileReducer = (state = initialState, action) => {
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
export const getProfileInfo = (userId) => async (dispatch) => {
    const response = await profileAPI.getProfile(userId)
    dispatch(setProfileDate(response.data))

};

export const getProfileStatus = (userId) => async (dispatch) => {
    const response = await profileAPI.getStatus(userId);
    dispatch(setStatusProfile(response.data))

};


export const updateProfileStatus = (status) => async (dispatch) => {
   try { const response = await profileAPI.updateStatus(status);
    if (response.data.resultCode === 0)
        dispatch(setStatusProfile(status))}
        catch (error) {
       debugger
            console.log(error.response.status);
        }
};
export const savePhoto = (file) => async (dispatch) => {
    const response = await profileAPI.savePhoto(file);
  if (response.data.resultCode === 0)
  {dispatch(savePhotoSuccess(response.data.data.photos))}
};

export const saveProfile = (profile) => async (dispatch, getState) => {
    debugger
    let userId = getState().auth.userID;
    const response = await profileAPI.saveProfile(profile);
    if (response.data.resultCode === 0) {
        dispatch(getProfileInfo(userId))
    } else {dispatch(stopSubmit("edit-profile", {_error: response.data.messages[0]}))
    return Promise.reject(response.data.messages[0])}
}

export default myProfileReducer;