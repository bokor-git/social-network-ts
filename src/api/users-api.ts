import {GetUserType, instance, ResponseData} from "./api";

export const userAPI = {
    getUsers: (currentPage: number, pageSize: number) => {
        return instance.get<GetUserType>(`users?Page=${currentPage}&count=${pageSize}`,)
            .then(response => response.data)
    },
    unfollowAPI: (userID: number) => {
        return instance.delete<ResponseData<{}>>(`follow/${userID}`).then(response => response.data)
    },
    followAPI: (userID: number) => {
        return instance.post<ResponseData<{}>>(`follow/${userID}`).then(response => response.data)
    },
};