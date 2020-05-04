import * as axios from "axios";

const instance = axios.create ({
    withCredentials: true,
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    headers: {
        "API-KEY": "0ec4be5c-05ae-403f-b660-0e7e553f2d34"
    }
})

export const userAPI = {
    getUsers: (currentPage, pageSize) => {
        return instance.get(`users?Page=${currentPage}&count=${pageSize}`,)
            .then(response => {
                return response.data
            })
    },
    unfollowAPI: (userID)=>{
        return instance.delete(`follow/${userID}`).then(response=>{return response.data})
    },
    followAPI: (userID)=>{
        return instance.post(`follow/${userID}`).then(response=>{return response.data})
    },
};

export const authAPI ={
    me() {return  instance.get(`auth/me`)},
    login: (email, password, captcha)=>{
        return instance.post(`/auth/login`,{email,password,captcha}).then(response=>{return response})
    },
    logout: ()=>{
        return instance.delete(`/auth/login`).then(response=>{return response})
    },
}

export const profileAPI={
    getProfile: (userId)=>{
        return  instance.get(`profile/`+userId)
    },
    getStatus: (userId)=>{
        return  instance.get(`/profile/status/${userId}`)
    },
    updateStatus: (status)=>{
        return  instance.put(`/profile/status`,{status})
    },
    savePhoto: (photoFile)=>{
        const formData = new FormData()
        formData.append("image",photoFile)
        return  instance.put(`/profile/photo`,formData,{
            headers: {'Content-Type': 'multipart/form-data' }
        })
    },
    saveProfile: (profile)=>{return instance.put(`/profile/`, profile)
    }
};
export const securityAPI = {
    getCaptchaUrl() {
        return instance.get(`security/get-captcha-url`)
    }
}