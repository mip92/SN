import * as axios from "axios";

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
    deleteUser(id) {
        return instance.delete(`follow/${id}`)
            .then(response => {
                return response.data
            });
    },
    postUser(id) {
        return instance.post(`follow/${id}`)
            .then(response => {
                return response.data
            });
    },
}

export const authAPI = {
    authMe() {
        return instance.get(`auth/me`)
            .then(response => {
                return response.data
            });
    },
    login(email, password, rememberMe = false) {
        return instance.post(`auth/login`, {email, password, rememberMe})
            .then(response => {
                return response.data
            });
    },
    logout() {
        return instance.delete(`auth/login`)
            .then(response => {
                return response.data
            });
    }
}
export const profileAPI = {
    getUser(userId) {
        return instance.get(`profile/` + userId)
            .then(response => {
                return response.data
            });
    },
    getStatus(userId) {

        return instance.get(`profile/status/${userId}`)
            .then(response => {
                return response.data
            });
    },
    updateStatus(status) {
        return instance.put(`profile/status/`, {status: status})
            .then(response => {
                    return response.data
                }
            );
    },
    savePhoto(photoFile) {
        const formData = new FormData();
        formData.append("image", photoFile)
        return instance.put(`/profile/photo`, formData, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        }).then(response => {
                return response.data
            }
        );
    },
    formData(formData) {
        debugger
        return instance.put(`/profile`,formData)
            .then(response => {
                debugger
                return response.data
            });
    },

}