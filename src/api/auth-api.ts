import {AuthMeType, instance, ResponseData} from "./api";

export const authAPI = {
    me() {
        return instance.get<ResponseData<AuthMeType>>(`auth/me`).then(res => res.data)
    },
    login: (email: string, password: string, captcha: string) => {
        return instance.post<ResponseData<{ userId: number }>>(`/auth/login`, {email, password, captcha})
            .then(response =>response.data)
    },
    logout: () => {
        return instance.delete<ResponseData<{}>>(`/auth/login`).then((response) =>response)
    },
}