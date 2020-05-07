import {authAPI, securityAPI} from "../api/api";
import { stopSubmit } from "redux-form";



type SetAuthUserDataType = {
    type: typeof SET_USER_DATA
    data: {
        userID: string | null
        email: string | null
        login: string | null
        isAuth: boolean
    }
}

type  GetCaptchaUrlSuccessType = {
    type: typeof GET_CAPTCHA_URL_SUCCESS
    captchaUrl: string
}

const SET_USER_DATA = "auth/SET_USER_DATA";
export const setAuthUserData = (userID: string | null, email: string | null, login: string | null, isAuth: boolean): SetAuthUserDataType => {
    return {type: SET_USER_DATA, data: {userID, email, login, isAuth}}
};

const GET_CAPTCHA_URL_SUCCESS = "auth/GET_CAPTCHA_URL_SUCCESS";
export const getCaptchaUrlSuccess = (captchaUrl: string): GetCaptchaUrlSuccessType => {
    return {type: GET_CAPTCHA_URL_SUCCESS, captchaUrl: captchaUrl}
};

export type InitialStateType = {
    userID: null | number
    email: null | string
    login: null | string
    isAuth: boolean
    captchaUrl: null | string
}

let initialState: InitialStateType = {
    userID: null,
    email: null,
    login: null,
    isAuth: false,
    captchaUrl: null
};

const authReducer = (state = initialState, action: any): InitialStateType => {
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

export const getAuthUserData = () => async (dispatch: any) => {
        let response = await authAPI.me()
        if (response.data.resultCode === 0) {
            dispatch(setAuthUserData(response.data.data.id, response.data.data.email, response.data.data.login, true))
        }
    }
;
export const singInThunk = (email: string, password: string, captcha: string) => async (dispatch: any) => {
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
export const singOutThunk = () => async (dispatch: any) => {
    const response = await authAPI.logout()
    if (response.data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false))
    }
}
export const getCaptchaUrl = () => async (dispatch: any) => {
    const response = await securityAPI.getCaptchaUrl()
    const captchaUrl = response.data.url;
    dispatch(getCaptchaUrlSuccess(captchaUrl))
};
export default authReducer;