import {authMe, setAuthUserData, setUserSmallPhoto} from "./authReducer";
import {authAPI, profileAPI} from "../api/api";
import {constants} from "os";

const INITIALIZED_SUCCESS = "INITIALIZED-SUCCESS";
const ER = 'ERROR';

export type InitialStateType = {
    initialized: boolean;
    globalError: string;
}
let initialState: InitialStateType = {
    initialized: false,
    globalError: "",
};

export const appReducer = (state: InitialStateType = initialState, action: any): InitialStateType => {
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
type InitializedSuccessActionType = { type: typeof INITIALIZED_SUCCESS }

export const initializedSuccess = (): InitializedSuccessActionType => {
    return {type: INITIALIZED_SUCCESS}
};
export const letError = (error: any) => {
    debugger
    ////////////////////////////////////////////////////alert(error)
    return {
        type: ER,
        error: error
    }
};
export const thunkLetError = (error: any) => (dispatch: any) => {
    debugger
    dispatch(letError(error))
    setTimeout(() => {
        dispatch(letError(null))
    }, 5000)
}

type FirstDataType = {
    resultCode: number;
    data: {
        id: number;
        login: any;
        email: any;
    };
}
type SecondDataType = {
    photos: {
        small: string;
    }
}
export const initializeApp = () => (dispatch: any) => {
    let id: number;
    let login;
    let email;
    authAPI.authMe().then((data: FirstDataType) => {
        if (data.resultCode == 0) {
            id = data.data.id;
            login = data.data.login;
            email = data.data.email;
            dispatch(setAuthUserData(id, email, login, true));
        }
    }).then(() => {
        profileAPI.getUser(id).then((data: SecondDataType) => {
            dispatch(setUserSmallPhoto(data.photos.small));
        })
    }).then(() => {
        dispatch(initializedSuccess());
    });
};

