import {authAPI, securityAPI} from "../API/API";
import {stopSubmit} from 'redux-form';
const SET_USER_DATA= 'samurai-network/auth/SET_USER_DATA',
    GET_CAPTCHA_URL_SUCCESS = "GET_CAPTCHA_URL_SUCCESS";

let initialState = {
    userId:null,
    email:null,
    login:null,
    isAuth:false,
    captchaUrl:null,
    //isFetching: false
}

const authReducer = (state=initialState,action)=>{

    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload,
            }
            break;
        case GET_CAPTCHA_URL_SUCCESS:
            return {
                ...state,
                captchaUrl: action.url
            }
            break;
        default:
            return state
            break;
    }
}



export const setAuthUserData = (userId,email,login,isAuth)=>({type:SET_USER_DATA,payload:{userId,email,login,isAuth}})
export const getCaptchaUrlSuccess = (url)=>({type:GET_CAPTCHA_URL_SUCCESS,url})





export const getAuthUserData = () => async (dispatch) => {
    const response = await authAPI.me()

    if (response.data.resultCode == 0) {

        const {email, id, login} = response.data.data;
        dispatch(setAuthUserData(id, email, login, true));
    }
}


export const login = (email, password, rememberMe,captcha) => async (dispatch) => {

    let response = await authAPI.login(email, password, rememberMe,captcha)

    if (response.data.resultCode === 0) {
        dispatch(getAuthUserData());
    } else {
        if(response.data.resultCode === 10){
            dispatch(getCaptchaUrl());
        }
        const message = (response.data.messages.length > 0) ? response.data.messages[0] : "Some Error";
        dispatch(stopSubmit('login', {_error: message}))
    }
}


export const logOut = () => async (dispatch) => {
    let response = await authAPI.logOut();

    if (response.data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false));
    }
}

export const getCaptchaUrl = () => async (dispatch) => {
    const response = await securityAPI.getCaptchaUrl();
    dispatch(getCaptchaUrlSuccess(response.data.url))
}


export default authReducer;