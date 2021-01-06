import axios, {AxiosResponse} from "axios";
import {FormDataType, GetUserType} from "../types/types";

const instance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: {
        "API-KEY": "aec09892-749d-4c42-b208-544b7f308b49"
    },
});

export const userAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data
            });
    }
}
export const followAPI = {
    deleteUser(id: number) {
        return instance.delete(`follow/${id}`)
            .then(response => {
                return response.data
            });
    },
    postUser(id: number) {
        return instance.post(`follow/${id}`)
            .then(response => {
                return response.data
            });
    },
}

export enum ResultCodesEnum {
    Success = 0,
    Error = 1,
}
export enum ResultCodeForCaptcha {
    CaptchaIsRequired = 10,
}

type AuthMeType = {
    resultCode: number,
    messages: Array<string>,
    data: {
        id: number,
        email: string,
        login: string
    }
}
type LoginType = {
    resultCode: number,
    messages: Array<string>,
    data: {
        userId: number,
    }
}
type logoutType = {
    resultCode: number,
    messages: Array<string>,
    data: {}
}

export const authAPI = {
    authMe() {
        return instance.get<AuthMeType>(`auth/me`)
            .then(response => {
                return response.data
            });
    },
    login(email: string,
          password: string,
          rememberMe = false,
          captcha: string | null = null) {
        return instance.post<LoginType>(`auth/login`, {email, password, rememberMe, captcha})
            .then(response => {
                return response.data
            });
    },
    logout() {
        return instance.delete<logoutType>(`auth/login`)
            .then(response => {
                return response.data
            });
    }
}
type updateStatus = {
    resultCode: number,
    messages: Array<string>,
    data: { status: string }
}
type savePhotoType = {
    resultCode: number,
    messages: Array<string>,
    data: {
        photos: {
            small: string | null,
            large: string | null,
        }
    }

}

export const profileAPI = {
    getUser(userId: number) {
        return instance.get<GetUserType>(`profile/` + userId)
            .then(response => {
                return response.data
            });
    },
    getStatus(userId: number) {
        return instance.get<string>(`profile/status/${userId}`)
            .then(response => {
                return response.data
            });
    },
    updateStatus(status: string) {
        return instance.put<updateStatus>(`profile/status/`, {status: status})
            .then(response => {
                    return response.data
                }
            );
    },
    savePhoto(photoFile: File) {
        const formData = new FormData();
        formData.append("image", photoFile)
        return instance.put<savePhotoType>(`/profile/photo`, formData, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        }).then(response => {
                return response.data
            }
        );
    },

    formData(formData: FormDataType) {
        return instance.put(`/profile`, formData)
            .then(response => {
                return response.data
            });
    },
}
export const securityAPI = {
    getCaptchaURL() {
        return instance.get(`security/get-captcha-url`)
            .then(response => {
                return response.data
            });
    },
}