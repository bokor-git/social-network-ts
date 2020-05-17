import axios from "axios";
import {UserType} from "../types/types";

export const instance = axios.create({
    withCredentials: true,
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    headers: {
        "API-KEY": "0ec4be5c-05ae-403f-b660-0e7e553f2d34"
    }
})

export type GetUserType = {
    items: Array<UserType>
    totalCount: number
    error: null | string
}



export enum ResponseResultCode {
    Success=0,
    Error = 1,
    CaptchaIsRequired=10

}

export type ResponseData<D={}> = {
    resultCode: number
    messages: Array<string>
    data: D
}

export type AuthMeType = {
    id: number
    email: string
    login: string
}


