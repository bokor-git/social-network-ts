import {authAPI, securityAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = "auth/SET_USER_DATA";
export const setAuthUserData = (userID, email, login, isAuth) => {
    return {type: SET_USER_DATA, data: {userID, email, login, isAuth}}
};

const GET_CAPTCHA_URL_SUCCESS = "auth/GET_CAPTCHA_URL_SUCCESS";
export const getCaptchaUrlSuccess = (captchaUrl) => {
    return {type: GET_CAPTCHA_URL_SUCCESS, captchaUrl}
};

let initialState = {
    userID: null,
    email: null,
    login: null,
    isAuth: false,
    captchaUrl: null
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
            };
        case GET_CAPTCHA_URL_SUCCESS:
            debugger
            return {
                ...state,
                captchaUrl: action.captchaUrl,
            };

        default:
            return state
    }
};

export const getAuthUserData = () => async (dispatch) => {
        let response = await authAPI.me()
        if (response.data.resultCode === 0) {
            dispatch(setAuthUserData(response.data.data.id, response.data.data.email, response.data.data.login, true))
        }
    }
;
export const singInThunk = (email, password, captcha) => async (dispatch) => {
    const response = await authAPI.login(email, password, captcha);
    if (response.data.resultCode === 0) {
        dispatch(getAuthUserData())
    } else {
        if (response.data.resultCode === 10) {
            dispatch(getCaptchaUrl())
        }
        let action = stopSubmit("login", {_error: response.data.messages})
        dispatch(action)
    }
}
export const singOutThunk = () => async (dispatch) => {
    const response = await authAPI.logout()
    if (response.data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false))
    }
}
export const getCaptchaUrl = () => async (dispatch) => {
    const response = await securityAPI.getCaptchaUrl()
    const captchaUrl = response.data.url;
    dispatch(getCaptchaUrlSuccess(captchaUrl))
};
export default authReducer;