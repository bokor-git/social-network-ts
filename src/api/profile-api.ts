import {PhotosType, ProfileDataType} from "../types/types";
import {instance, ResponseData} from "./api";

export const profileAPI = {
    getProfile: (userId: number | null) => {
        return instance.get<ProfileDataType>(`profile/` + userId).then(res=>res.data)
    },
    getStatus: (userId: number) => {
        return instance.get<string>(`/profile/status/${userId}`).then(res=>res.data)
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