import {authMe, setAuthUserData, setUserSmallPhoto} from "./authReducer";
import {authAPI, profileAPI} from "../api/api";

const INITIALIZED_SUCCESS = "INITIALIZED-SUCCESS";
const ER = 'ERROR';


let initialState = {
    initialized: false,
    globalError: "",
};

export const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case ER:
            debugger
            return {
                ...state,
                globalError: action.error,
            }
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true,
            }
        default:
            return state;
    }
}


export const initializedSuccess = () => {
    return {type: INITIALIZED_SUCCESS}
};
export const letError = (error) => {
    debugger
    ////////////////////////////////////////////////////alert(error)
    return {type: ER,
        error: error}
};
export const thunkLetError = (error) => (dispatch) => {
    debugger
    dispatch(letError(error))
    setTimeout(() => {dispatch(letError(null))}, 5000)
}
export const initializeApp = () => (dispatch) => {
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
    }).then(response => {
        dispatch(initializedSuccess());
    });
};

