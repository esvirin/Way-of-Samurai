import axios from 'axios'
import {currentUserType, photosType} from "../redux/profileReducer";
import {AuthLoginResponseDATAType, AuthMeResponseDATAType, LoginDataType, ResponseType} from "./ResponseTypes";

const create = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': '15bcd203-f87a-4606-9556-a1e8ecfb04be'
    }
})


export const userAPI = {

    getUsers(currentPage = 1, pageSize = 10) {
        return create.get(`users?page=${currentPage}&count=${pageSize}`).then(response => {
            return response.data
        })
    },

    getFollowers(boolean: boolean, userId: number) {

        if (boolean) {
            return create.post(`follow/${userId}`).then(response => {
                return response.data
            })
        } else {
            return create.delete(`follow/${userId}`).then(response => {
                return response.data
            })
        }
    },

    getProfile(userId = 16527) {

        return create.get<currentUserType>(`profile/${userId}`).then(response => response.data)
    },
    getProfileStatus(userId: number) {

        return create.get<string>(`profile/status/${userId}`).then(response => {
            return response.data
        })
    },


    getMe() {
        return create.get<ResponseType<AuthMeResponseDATAType>>('auth/me').then(response => response.data)
    },

    setStatus(newStatus: string) {
        return create.put<ResponseType<string>>('profile/status', {status: newStatus}).then(response => response.data)
    },
    login(obj: LoginDataType) {
        return create.post<ResponseType<AuthLoginResponseDATAType>>('auth/login', obj).then(response => response.data)
    },
    logout() {
        return create.delete<ResponseType<Object>>('auth/login').then(response => response.data)
    },

    loadFile(file: any) {
        const formData = new FormData()
        formData.append('image', file)
        return create.put<ResponseType<photosType>>('profile/photo', formData,
            {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }).then(response => response.data)
    },

    upLoadProfile(profile: currentUserType) {
        return create.put<ResponseType<Object>>('profile', {...profile}).then(response => response.data)
    }
}


