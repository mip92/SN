import {setAuthUserData, SetAuthUserDataType, setUserSmallPhoto, SetUserSmallPhotoType} from "./authReducer";
import {authAPI, profileAPI} from "../api/api";
//import {constants} from "os";
//import {constants} from "os";
//import {AppStateType} from "./reduxstore";
import {Dispatch} from "redux";

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

export const appReducer = (state: InitialStateType = initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case ER:
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

type ActionsTypes =InitializedSuccessActionType | letErrorActionType| SetAuthUserDataType | SetUserSmallPhotoType;

type InitializedSuccessActionType = { type: typeof INITIALIZED_SUCCESS }

export const initializedSuccess = (): InitializedSuccessActionType => {
    return {type: INITIALIZED_SUCCESS}
};
export type letErrorActionType = { type: typeof ER; error: string }
export const letError = (error: string):letErrorActionType => {
    return {
        type: ER,
        error: error
    }
};

//type getStateType = () => AppStateType;
type CurrentDispatchType = Dispatch<ActionsTypes>;

export const thunkLetError = (error: string) => (dispatch: CurrentDispatchType) => {
    dispatch(letError(error))
    setTimeout(() => {
        dispatch(letError(''))
    }, 5000)
}

type FirstDataType = {
    resultCode: number;
    data: {
        id: number;
        login: string;
        email: string;
    };
}
type SecondDataType = {
    photos: {
        small: string;
    }
}
export const initializeApp = () => (dispatch: CurrentDispatchType) => {
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

