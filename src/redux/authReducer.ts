import {authAPI, profileAPI, securityAPI} from "../api/api";
import {setStatus} from "./profileReducer";

import {stopSubmit} from "redux-form";

const SET_USER_DATA = "auth/SET-USER-DATA";
const SET_USER_SMALL_PHOTO = "auth/SET-USER-SMALL-PHOTO";
const GET_CAPTCHA_URL_SUCCESS = "GET-CAPTCHA-URL-SUCCESS";

type InitialStateType = {
    id: number | null,
    email: string | null,
    login: string | null,
    isAuth: boolean,
    smallPhoto: string | null,
    captchaUrl: string | null,
}

let initialState: InitialStateType = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
    smallPhoto: null,
    captchaUrl: null,
};

export const authReducer = (state = initialState, action: any): InitialStateType => {
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

type SetAuthUserDataType = {
    type: typeof SET_USER_DATA;
    data: {
        userId: number| null;
        email: string| null;
        login: string| null;
        isAuth: boolean;
    }
}
export const setAuthUserData = (userId: number| null, email: string| null, login: string| null, isAuth: boolean): SetAuthUserDataType => {
    return {type: SET_USER_DATA, data: {userId, email, login, isAuth}}
};
type GetCaptchaUrlSuccessType = {
    type: typeof GET_CAPTCHA_URL_SUCCESS;
    captchaUrl: string;
}
export const getCaptchaUrlSuccess = (captchaUrl: string): GetCaptchaUrlSuccessType => {
    return {type: GET_CAPTCHA_URL_SUCCESS, captchaUrl}
};
type SetUserSmallPhotoType = {
    type: typeof SET_USER_SMALL_PHOTO;
    smallPhoto: string;
}
export const setUserSmallPhoto = (smallPhoto: string ): SetUserSmallPhotoType => {
    return {type: SET_USER_SMALL_PHOTO, smallPhoto}
};

type firstDataType = {
    resultCode: number;
    data: {
        id: number;
        login: string;
        email: string;
    }
}
type secondDataType = {
    photos: {
        small:string;
    };
}
type thirdDataType = {
     resultCode: number;
}

export const authMe = () => (dispatch: any) => {
    let id: number;
    let login: string;
    let email: string;
    authAPI.authMe().then((data: firstDataType) => {
        if (data.resultCode == 0) {
            id = data.data.id;
            login = data.data.login;
            email = data.data.email;
            dispatch(setAuthUserData(id, email, login, true));
        }
    }).then(() => {
        profileAPI.getUser(id).then((data: secondDataType) => {
            dispatch(setUserSmallPhoto(data.photos.small));
        })
    })
};
export const LoginAC = (email: string, password: string, rememberMe: boolean, captcha: string) => async (dispatch: any) => {
    let data = await authAPI.login(email, password, rememberMe, captcha);
    if (data.resultCode == 0) dispatch(authMe());

    else {
        if (data.resultCode == 10) {
            dispatch(getCaptchaUrl())
        }
        let message = data.messages.length > 0 ? data.messages[0] : "some error";
        dispatch(stopSubmit('login', {_error: message}));
    }
};

export const getCaptchaUrl = () => async (dispatch: any) => {
    let responsee = await securityAPI.getCaptchaURL();
    let captcha = responsee.url;
    dispatch(getCaptchaUrlSuccess(captcha));
};

export const LogoutAC = () => async (dispatch:any) => {
    let data = await authAPI.logout().then((data: thirdDataType) => {
        if (data.resultCode == 0) dispatch(setAuthUserData(null, null, null, false));
    });
};
