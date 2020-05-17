import axios from "axios";
import {PhotosType, ProfileDataType, UserType} from "../types/types";

const instance = axios.create({
    withCredentials: true,
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    headers: {
        "API-KEY": "0ec4be5c-05ae-403f-b660-0e7e553f2d34"
    }
})

type GetUserType = {
    items: Array<UserType>
    totalCount: number
    error: null | string
}



export enum ResponseResultCode {
    Success=0,
    Error = 1,
    CaptchaIsRequired=10

}

type ResponseData<D> = {
    resultCode: number
    messages: Array<string>
    data: D
}

type AuthMeType = {
    id: number
    email: string
    login: string
}

export const userAPI = {
    getUsers: (currentPage: number, pageSize: number) => {
        return instance.get<GetUserType>(`users?Page=${currentPage}&count=${pageSize}`,)
            .then(response => {
                return response.data
            })
    },
    unfollowAPI: (userID: number) => {
        return instance.delete<ResponseData<{}>>(`follow/${userID}`).then(response => {
            return response.data
        })
    },
    followAPI: (userID: number) => {
        return instance.post<ResponseData<{}>>(`follow/${userID}`).then(response => {
            return response.data
        })
    },
};


export const authAPI = {
    me() {
        return instance.get<ResponseData<AuthMeType>>(`auth/me`).then(res => res.data)
    },
    login: (email: string, password: string, captcha: string) => {
        return instance.post<ResponseData<{ userId: number }>>(`/auth/login`, {email, password, captcha}).then(response => {
            return response.data
        })
    },
    logout: () => {
        return instance.delete<ResponseData<{}>>(`/auth/login`).then((response) => {
            return response
        })
    },
}

export const profileAPI = {
    getProfile: (userId: number | null) => {
        return instance.get<ProfileDataType>(`profile/` + userId)
    },
    getStatus: (userId: number) => {
        return instance.get<string>(`/profile/status/${userId}`)
    },
    updateStatus: (status: string) => {
        return instance.put<ResponseData<{}>>(`/profile/status`, {status})
    },
    savePhoto: (photoFile: File) => {
        const formData = new FormData()
        formData.append("image", photoFile)
        return instance.put<ResponseData<{ photos: PhotosType }>>(`/profile/photo`, formData, {
            headers: {'Content-Type': 'multipart/form-data'}
        })
    },
    saveProfile: (profile: ProfileDataType) => {
        return instance.put<ResponseData<{}>>(`/profile/`, profile)
    }
};
export const securityAPI = {
    getCaptchaUrl() {
        return instance.get<{url:string}>(`security/get-captcha-url`)
    }
}