import {authAPI, securityAPI} from "../api/api";
import { stopSubmit } from "redux-form";
import {ThunkAction} from "redux-thunk";
import {AppStateType} from "./redux-store";


const SET_USER_DATA = "auth/SET_USER_DATA";
const GET_CAPTCHA_URL_SUCCESS = "auth/GET_CAPTCHA_URL_SUCCESS";

type SetAuthUserDataType = {
    type: typeof SET_USER_DATA
    data: {
        userID: number | null
        email: string | null
        login: string | null
        isAuth: boolean
    }
}
export const setAuthUserData = (userID: number | null, email: string | null, login: string | null, isAuth: boolean): SetAuthUserDataType => {
    return {type: SET_USER_DATA, data: {userID, email, login, isAuth}}
};


type  GetCaptchaUrlSuccessType = {
    type: typeof GET_CAPTCHA_URL_SUCCESS
    captchaUrl: string
}
export const getCaptchaUrlSuccess = (captchaUrl: string): GetCaptchaUrlSuccessType => {
    return {type: GET_CAPTCHA_URL_SUCCESS, captchaUrl: captchaUrl}
};



let initialState = {
    userID: null as null | number,
    email: null as null | string,
    login: null as null | string,
    isAuth: false,
    captchaUrl: null as null | string
};

type InitialStateType = typeof  initialState

type ActionTypes = SetAuthUserDataType | GetCaptchaUrlSuccessType

const authReducer = (state = initialState, action: ActionTypes): InitialStateType => {
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

type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionTypes>

export const getAuthUserData = ():ThunkType => async (dispatch) => {
        let meData = await authAPI.me()
        if (meData.resultCode === 0) {
            dispatch(setAuthUserData(meData.data.id, meData.data.email, meData.data.login, true))
        }
    }

export const singInThunk = (email: string, password: string, captcha: string):ThunkType => async (dispatch) => {
    const loginData = await authAPI.login(email, password, captcha);
    if (loginData.resultCode === 0) {
        dispatch(getAuthUserData())
    } else {
        if (loginData.resultCode === 10) {
            dispatch(getCaptchaUrl())
        }
        let massage = loginData.messages.length>0?loginData.messages[0]:"Some error";
        // @ts-ignore
        dispatch(stopSubmit("login", {_error: massage}))
    }
}
export const singOutThunk = ():ThunkType => async (dispatch) => {
    const response = await authAPI.logout()
    if (response.data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false))
    }
}
export const getCaptchaUrl = ():ThunkType => async (dispatch) => {
    const response = await securityAPI.getCaptchaUrl()
    const captchaUrl = response.data.url;
    dispatch(getCaptchaUrlSuccess(captchaUrl))
};
export default authReducer;