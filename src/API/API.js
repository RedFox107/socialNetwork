import * as axios from 'axios';

const axiosInstance = axios.create({
    withCredentials:true,//Захват куки
    baseURL:'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY":"d86c8013-ab3c-45b7-8eb4-f78e38bc70c6"
    }

});

/*const API = {
    getUsers: (currentPage=1,pageSize=10)=>{
        return axiosInstance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response=>response.data)
    },

}*/
const API_prototype = {
    get: (path = '', params = {}) => {
        const stringParams = Object.entries(params).map((p) => p.join('=')).join('&');
        return axiosInstance.get(`${path}?${stringParams}`).then(response => {return response.data})
    },
    post: (path = '', params = {}) => {
        //const stringParams = Object.entries(params).map((p)=>p.join('=')).join('&');
        return axiosInstance.post(`${path}`).then(response => response.data)
    },
    delete: (path = '', params = {}) => {
        //const stringParams = Object.entries(params).map((p)=>p.join('=')).join('&');
        return axiosInstance.delete(`${path}`).then(response => response.data)
    },
    follow:(userId)=>{
        return axiosInstance.post(`follow/${userId}`)
    },
    unfollow:(userId)=>{
        return axiosInstance.delete(`follow/${userId}`)
    },
    getProfile:(userId)=>{
        return axiosInstance.get(`profile/${userId}`)
    }
}

export const profileAPI = {
    saveProfile:(profile)=>{
        return axiosInstance.put('/profile',profile);
    },

    savePhoto:(file)=>{
        const formData = new FormData();
        formData.append('image',file)
        return axiosInstance.put('profile/photo',formData,{
            headers:{
                'Content-Type':'multipart/form-data'
            }
        })
    },
    getProfile:(userId)=>{
        return axiosInstance.get(`profile/${userId}`)
    },
    getStatus:(userId)=>{
        return axiosInstance.get(`profile/status/${userId}`)
    },
    updateStatus:(status)=>{
        return axiosInstance.put(`profile/status`,{
            status:status
        })
    },

}
export default API_prototype;


export const authAPI = {
    me:()=>{
        return axiosInstance.get('auth/me')
    },
    login:(email,password,rememberMe=false,captcha)=>{
        return axiosInstance.post('auth/login',{email,password,rememberMe,captcha})
    },
    logOut:()=>{
        return axiosInstance.delete('auth/login')
    },
}

export const securityAPI = {
    getCaptchaUrl:()=>{
        return axiosInstance.get('security/get-captcha-url')
    }
}

//export default API;
/*axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,{},{
                                        withCredentials:true,
                                        headers: {
                                            "API-KEY":"65a0a690-a05e-4ddf-871b-5dba1f776dd0"
                                        }
                                    })*/