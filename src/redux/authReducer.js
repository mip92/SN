import {authAPI, profileAPI, securityAPI} from "../api/api";
import {setStatus} from "./profileReducer";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = "auth/SET-USER-DATA";
const SET_USER_SMALL_PHOTO = "auth/SET-USER-SMALL-PHOTO";
const GET_CAPTCHA_URL_SUCCESS = "GET-CAPTCHA-URL-SUCCESS";

let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
    smallPhoto: null,
    captchaUrl: null,
};

export const authReducer = (state = initialState, action) => {
    switch (action.type) {

        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
            }
        case SET_USER_SMALL_PHOTO:
            return {
                ...state,
                smallPhoto: action.smallPhoto,
            }
        case GET_CAPTCHA_URL_SUCCESS:
            return {
                ...state,
                captchaUrl: action.captchaUrl,
            }
        default:
            return state;
    }
}


export const setAuthUserData = (userId, email, login, isAuth) => {
    return {type: SET_USER_DATA, data: {userId, email, login, isAuth}}
};
export const getCaptchaUrlSuccess  = (captchaUrl) => {
    return {type: GET_CAPTCHA_URL_SUCCESS, captchaUrl}
};
export const setUserSmallPhoto = (smallPhoto) => {
    return {type: SET_USER_SMALL_PHOTO, smallPhoto}
};
export const authMe = () => (dispatch) => {
    let id;
    let login;
    let email;
    authAPI.authMe().then(data => {
        if (data.resultCode == 0) {
            id = data.data.id;
            login = data.data.login;
            email = data.data.email;
            dispatch(setAuthUserData(id, email, login, true));
        }
    }).then(response => {
        profileAPI.getUser(id).then(data => {
            dispatch(setUserSmallPhoto(data.photos.small));
        })
    })
};
export const LoginAC = (email, password, rememberMe, captcha) => async (dispatch) => {
    let data = await authAPI.login(email, password, rememberMe, captcha);
        if (data.resultCode == 0) dispatch(authMe());

        else {
            if (data.resultCode==10){
                dispatch(getCaptchaUrl())
            }
            let message = data.messages.length > 0 ? data.messages[0] : "some error";
            dispatch(stopSubmit('login', {_error: message}));
        }
};

export const getCaptchaUrl = () => async (dispatch) => {
    let responsee = await securityAPI.getCaptchaURL();
    let captcha = responsee.url;
    dispatch(getCaptchaUrlSuccess(captcha));
};

export const LogoutAC = () =>async (dispatch) => {
    let data = await authAPI.logout().then(data => {
        if (data.resultCode == 0) dispatch(setAuthUserData(null, null, null, false));
    });
};
