import {ResponseResultCode} from "../api/api";
import { stopSubmit } from "redux-form";
import {ThunkAction} from "redux-thunk";
import {AppStateType, InferActionTypes} from "./redux-store";
import {authAPI} from "../api/auth-api";
import {securityAPI} from "../api/security-api";

export const actions = {
     setAuthUserData: (userID: number | null, email: string | null, login: string | null, isAuth: boolean) => ({type: "SET_USER_DATA", data: {userID, email, login, isAuth}}as const),
    getCaptchaUrlSuccess: (captchaUrl: string) => ({type: "GET_CAPTCHA_URL_SUCCESS", captchaUrl: captchaUrl} as const)
}

let initialState = {
    userID: null as null | number,
    email: null as null | string,
    login: null as null | string,
    isAuth: false,
    captchaUrl: null as null | string
};

type InitialStateType = typeof  initialState

type ActionTypes = InferActionTypes<typeof actions>

const authReducer = (state = initialState, action: ActionTypes): InitialStateType => {
    switch (action.type) {
        case "SET_USER_DATA":
            return {
                ...state,
                ...action.data,
            };
        case "GET_CAPTCHA_URL_SUCCESS":
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
        if (meData.resultCode === ResponseResultCode.Success) {
            dispatch(actions.setAuthUserData(meData.data.id, meData.data.email, meData.data.login, true))
        }
    }

export const singInThunk = (email: string, password: string, captcha: string):ThunkType => async (dispatch) => {
    const loginData = await authAPI.login(email, password, captcha);
    if (loginData.resultCode === ResponseResultCode.Success) {
        dispatch(getAuthUserData())
    } else {
        if (loginData.resultCode === ResponseResultCode.CaptchaIsRequired) {
            dispatch(getCaptchaUrl())
        }
        let massage = loginData.messages.length>0?loginData.messages[0]:"Some error";
        // @ts-ignore
        dispatch(stopSubmit("login", {_error: massage}))
    }
}
export const singOutThunk = ():ThunkType => async (dispatch) => {
    const response = await authAPI.logout()
    if (response.data.resultCode === ResponseResultCode.Success) {
        dispatch(actions.setAuthUserData(null, null, null, false))
    }
}
export const getCaptchaUrl = ():ThunkType => async (dispatch) => {
    const response = await securityAPI.getCaptchaUrl()
    const captchaUrl = response.data.url;
    dispatch(actions.getCaptchaUrlSuccess(captchaUrl))
};
export default authReducer;