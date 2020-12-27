import {authAPI, profileAPI} from "../api/api";
import {stopSubmit} from "redux-form";
import {thunkLetError} from "./appReducer";
import {PhotosType, PostsType, ProfileType} from "../types/types";

const ADD_POST = "ADD-POST";
const SET_USER_PROFILE = "SET-USER-PROFILE";
const SET_STATUS = "SET-STATUS";
const DELETE_POST = "DELETE-POST";
const SAVE_PHOTO_SUCCESS = "SAVE-PHOTO-SUCCESS"
const UPDATE_PROFILE = "UPDATE-PROFILE"

let initialState = {
    posts: [
        {id: 1, post: 'hi, how are you', likesCount: 1},
        {id: 2, post: 'It`s my first post', likesCount: 2},
    ]as Array<PostsType>,
    profile: null as ProfileType| null,
    status: "" as string,
    newPostText: '',
};
export type initialStateType = typeof initialState;

export const profileReducer = (state = initialState, action: any):initialStateType => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 3,
                post: action.text,
                likesCount: 0,
            }
            let stateCopy = {...state};
            stateCopy.posts = [...state.posts];
            stateCopy.posts.push(newPost);
            return stateCopy;
        }
        case DELETE_POST: {
            return {...state, posts: state.posts.filter(p => p.id != action.postId)}
        }
        case SET_USER_PROFILE: {
            return {...state, profile: action.profile}
        }
        case SET_STATUS: {
            return {...state, status: action.status}
        }
        case SAVE_PHOTO_SUCCESS: {
            return {...state, profile: {...state.profile, photos: action.photos} as ProfileType}
        }
        case UPDATE_PROFILE: {
            return {...state, profile: {...state.profile, aboutMe:action.aboutMe,
                                        contacts: action.contacts, lookingForAJob: action.lookingForAJob,
                                        lookingForAJobDescription:action.lookingForAJobDescription} as ProfileType}
        }

        default:
            return state;
    }
    return state;
}

type AddPostActionCreatorType = {
    type: typeof ADD_POST;
    text: string;
}

export const addPostActionCreator = (text: string):AddPostActionCreatorType => {
    return {
        type: ADD_POST,
        text,
    }
};
type DeletePostType = {
    type: typeof DELETE_POST;
    postId: number;
}
export const deletePost = (postId: number): DeletePostType => {
    return {type: DELETE_POST, postId}
};
type SetStatusType = {
    type: typeof SET_STATUS;
    status: string;
}
export const setStatus = (status: string): SetStatusType => {
    return {
        type: SET_STATUS,
        status: status,
    }
};
type SetUserProfileType = {
    type: typeof SET_USER_PROFILE;
    profile: ProfileType;
}
const setUserProfile = (profile: ProfileType): SetUserProfileType => { //////////////////////////////////////////any
    return {type: SET_USER_PROFILE, profile}
};

type UpdateProfileType = {
    type: typeof UPDATE_PROFILE;
    aboutMe: string;
    contacts:{
        github: string;
        vk: string;
        facebook: string;
        instagram: string;
        twitter: string;
        website: string;
        youtube: string;
        mainLink: string;
    };
    lookingForAJobDescription: string;
    lookingForAJob: boolean;
}
const updateProfile = (aboutMe: string,
                       contacts:{
                           github: string;
                           vk: string;
                           facebook: string;
                           instagram: string;
                           twitter: string;
                           website: string;
                           youtube: string;
                           mainLink: string;
                       },
                       lookingForAJobDescription: string,
                       lookingForAJob: boolean): UpdateProfileType => {
    return {type: UPDATE_PROFILE, aboutMe, contacts, lookingForAJobDescription, lookingForAJob}
};
type SavePhotoSuccessType = {
    type: typeof SAVE_PHOTO_SUCCESS;
    photos: PhotosType;
}
const savePhotoSuccess = (photos: PhotosType): SavePhotoSuccessType => {
    return {type: SAVE_PHOTO_SUCCESS, photos}
};

export const getUserProfile = (userId: number) => async (dispatch : any) => {
    let data = await profileAPI.getUser(userId)
    dispatch(setUserProfile(data));
}
export const getStatus = (userId: number) => async (dispatch: any) => {
    let data = await profileAPI.getStatus(userId)
    if (data == null || data == "") dispatch(setStatus('Шалом'));
    else dispatch(setStatus(data));
}
export const updateStatus = (status: string) => async (dispatch: any) => {

        let data = await profileAPI.updateStatus(status)
        if (data.resultCode == 0) {
            dispatch(setStatus(status));
        }
        if (data.resultCode !== 0){
            debugger
            dispatch(thunkLetError(`${data.messages[0]}+1`))
        }
}

export const savePhoto = (file: any) => async (dispatch: any) => {
    let data = await profileAPI.savePhoto(file)
    if (data.resultCode == 0) {
        dispatch(savePhotoSuccess(data.data.photos.large));
    }
}

export const sendForm = (aboutMe: string,
                         fullName: string,
                         github: string,
                         vk: string,
                         facebook: string,
                         instagram: string,
                         twitter: string,
                         website: string,
                         youtube: string,
                         mainLink: string,
                         lookingForAJobDescription: string,
                         lookingForAJob: boolean) => async (dispatch: any) => {
    lookingForAJob==undefined ? lookingForAJob=false : lookingForAJob=true
    let formData = {
        aboutMe: aboutMe,
            contacts: {
            github: github,
            vk: vk,
            facebook: facebook,
            instagram: instagram,
            twitter: twitter,
            website: website,
            youtube: youtube,
            mainLink: mainLink,
        },
        lookingForAJob: lookingForAJob,
        lookingForAJobDescription: lookingForAJobDescription,
        fullName: fullName,
        userId: 12090,
    }
    let contacts= {
            github: github,
            vk: vk,
            facebook: facebook,
            instagram: instagram,
            twitter: twitter,
            website: website,
            youtube: youtube,
            mainLink: mainLink,
        };
    //dispatch (updateProfile(aboutMe, contacts, lookingForAJobDescription, lookingForAJob))
    let data = await profileAPI.formData(formData);
    if (data.resultCode == 0) dispatch (updateProfile(aboutMe, contacts, lookingForAJobDescription, lookingForAJob))
    else {
        dispatch(stopSubmit('profeleData', {_error: data.messages[0]}));
       return Promise.reject(data.messages[0]);
    }


};