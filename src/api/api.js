import * as axios from 'axios'

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

    getFollowers(boolean, userId) {

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

    getProfile(userId) {
        if (!userId) {
            userId = 16527
        }
        return create.get(`profile/${userId}`).then(response => response.data)
    }


}




