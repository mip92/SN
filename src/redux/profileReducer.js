import {authAPI, profileAPI} from "../api/api";
import {stopSubmit} from "redux-form";

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
    ],
    profile: null,
    status: "",
};

export const profileReducer = (state = initialState, action) => {
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
            return {...state, profile: {...state.profile, photos: action.photos}}
        }
        case UPDATE_PROFILE: {
            return {...state, profile: {...state.profile, aboutMe:action.aboutMe,
                                        contacts: action.contacts, lookingForAJob: action.lookingForAJob,
                                        lookingForAJobDescription:action.lookingForAJobDescription}}
        }

        default:
            return state;
    }
    return state;
}
export const addPostActionCreator = (text) => {
    return {
        type: ADD_POST,
        text,
    }
};
export const deletePost = (postId) => {
    return {type: DELETE_POST, postId}
};
export const setStatus = (status) => {
    return {
        type: SET_STATUS,
        status: status,
    }
};
const setUserProfile = (profile) => {
    debugger
    return {type: SET_USER_PROFILE, profile}
};

const updateProfile = (aboutMe, contacts, lookingForAJobDescription, lookingForAJob) => {
    debugger
    return {type: UPDATE_PROFILE, aboutMe, contacts, lookingForAJobDescription, lookingForAJob}
};

const savePhotoSuccess = (photos) => {
    return {type: SAVE_PHOTO_SUCCESS, photos}
};
export const getUserProfile = (userId) => async (dispatch) => {
    let data = await profileAPI.getUser(userId)
    dispatch(setUserProfile(data));
}
export const getStatus = (userId) => async (dispatch) => {
    let data = await profileAPI.getStatus(userId)
    if (data == null || data == "") dispatch(setStatus('Шалом'));
    else dispatch(setStatus(data));
}
export const updateStatus = (status) => async (dispatch) => {
    let data = await profileAPI.updateStatus(status)
    if (data.resultCode == 0) {
        dispatch(setStatus(status));
    }
}

export const savePhoto = (file) => async (dispatch) => {
    let data = await profileAPI.savePhoto(file)
    if (data.resultCode == 0) {
        dispatch(savePhotoSuccess(data.data.photos.large));
    }
}

export const sendForm = (aboutMe, fullName, github, vk, facebook, instagram, twitter, website, youtube, mainLink, lookingForAJobDescription, lookingForAJob) => async (dispatch) => {
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
    debugger
    //dispatch (updateProfile(aboutMe, contacts, lookingForAJobDescription, lookingForAJob))
    let data = await profileAPI.formData(formData);
    if (data.resultCode == 0) dispatch (updateProfile(aboutMe, contacts, lookingForAJobDescription, lookingForAJob))
    else {
        debugger
        dispatch(stopSubmit('profeleData', {_error: data.messages[0]}));
       return Promise.reject(data.messages[0]);
    }


};
