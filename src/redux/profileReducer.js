import {profileAPI} from "../api/api";

const ADD_POST = "ADD-POST";
const SET_USER_PROFILE = "SET-USER-PROFILE";
const SET_STATUS = "SET-STATUS";
const DELETE_POST = "DELETE-POST";

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
    return {type: SET_USER_PROFILE, profile}
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
