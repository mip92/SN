import {authAPI, profileAPI} from "../api/api";
import {setStatus} from "./profileReducer";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = "auth/SET-USER-DATA";
const SET_USER_SMALL_PHOTO = "auth/SET-USER-SMALL-PHOTO";

let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
    smallPhoto: null
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
        default:
            return state;
    }
}


export const setAuthUserData = (userId, email, login, isAuth) => {
    return {type: SET_USER_DATA, data: {userId, email, login, isAuth}}
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
export const LoginAC = (email, password, rememberMe) => async (dispatch) => {
    let data = await authAPI.login(email, password, rememberMe);
        if (data.resultCode == 0) dispatch(authMe());
        else {
            let message = data.messages.length > 0 ? data.messages[0] : "some error";
            dispatch(stopSubmit('login', {_error: message}));
        }
};
export const LogoutAC = () =>async (dispatch) => {
    let data = await authAPI.logout().then(data => {
        if (data.resultCode == 0) dispatch(setAuthUserData(null, null, null, false));
    });
};
