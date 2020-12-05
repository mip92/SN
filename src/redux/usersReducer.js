import {followAPI, userAPI} from "../api/api";
import {updateObjectArray} from "../utils/objectsHelpers";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT';
const ON_NUMBER_CHANGE = 'ON-NUMBER-CHANGE';
const SEARCH_NUMBER = 'SEARCH-NUMBER';
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING';
const TOGGLE_IS_FETCHING_PROGRESS = 'TOGGLE-IS-FETCHING-PROGRESS';
let initialState = {
    users: [
        /*
        {
            id: 1,
            ava: 'http://zhaba.ru/storage-10667/images-4356/7da28183c1ca335727f6033007c24c3f_74356.gif',
            followed: true,
            fullName: 'Andry',
            status: 'Сижу кушаю',
            location: {city: 'Dnipro', country: 'Ukraine'}
        },
        {
            id: 2,
            ava: 'http://zhaba.ru/storage-10667/images-4356/2ec52d3e31cc84526b5c1b8d332bb5f2_74356.gif',
            followed: false,
            fullName: 'Viktoriya',
            status: 'на море',
            location: {city: 'Poltava', country: 'Ukraine'}
        },
        {
            id: 3,
            ava: 'http://zhaba.ru/storage-10667/images-4356/54c86b4b33e968bb15eeea983d72a850_74356.gif',
            followed: true,
            fullName: 'Natalia',
            status: 'в астрале',
            location: {city: 'Dnipro', country: 'Ukraine'}
        },
        {
            id: 4,
            ava: 'http://zhaba.ru/storage-10667/images-4356/05f88dffdf9a406fe9b0bee9df3160a5_74356.gif',
            followed: false,
            fullName: 'Dmitry',
            status: 'я Сенсей',
            location: {city: 'Minsk', country: 'Belarus'}
        },
    */
    ],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    numberChange: '',
    isFetching: false,
    followingInProgress: [],
};

export const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: updateObjectArray(state.users,action.userId,'id', {followed: true})
                /*users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                })*/
            }
        case UNFOLLOW:
            return {
                ...state,
                users: updateObjectArray(state.users,action.userId,'id', {followed: false})
                /*users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                })*/
            }
        case SET_USERS: {
            return {
                ...state, users: [...action.users]
            }
        }
        case SET_CURRENT_PAGE: {
            return {...state, currentPage: action.currentPage}
        }
        case SET_TOTAL_USERS_COUNT: {
            return {...state, totalUsersCount: action.totalCount}
        }
        case ON_NUMBER_CHANGE: {
            return {...state, numberChange: action.number}
        }
        case SEARCH_NUMBER: {
            if (state.numberChange >= 1 && state.numberChange <= state.totalUsersCount / state.pageSize) {
                return {...state, currentPage: state.numberChange}
            } else {
                return {...state, currentPage: 1}
            }
        }
        case TOGGLE_IS_FETCHING: {
            {
                return {...state, isFetching: action.isFetching}
            }
        }
        case TOGGLE_IS_FETCHING_PROGRESS: {
            {
                return {
                    ...state,
                    followingInProgress: action.isFetching
                        ? [...state.followingInProgress, action.userId]
                        : state.followingInProgress.filter(id => id != action.userId)
                }
            }
        }
        default:
            return state;
    }
    //return state;
}
export const follow = (userId) => {
    return {
        type: FOLLOW,
        userId,
    }
}
export const unFollow = (userId) => {
    return {
        type: UNFOLLOW,
        userId,
    }
}
export const setUsers = (users) => {
    return {type: SET_USERS, users}
};
export const setCurrentPage = (currentPage) => {
    return {type: SET_CURRENT_PAGE, currentPage}
};
export const setTotalUsersCount = (totalCount) => {
    return {type: SET_TOTAL_USERS_COUNT, totalCount}
};
export const onNumberChange = (number) => {
    return {type: ON_NUMBER_CHANGE, number}
};
export const searchNumber = () => {
    return {type: SEARCH_NUMBER}
};
export const toggleIsFetching = (isFetching) => {
    return {type: TOGGLE_IS_FETCHING, isFetching}
};
export const toggleIsFetchingProgress = (isFetching, userId) => {
    return {type: TOGGLE_IS_FETCHING_PROGRESS, isFetching, userId}
}
export const requestUsers = (currentPage, pageSize) => {
    return async (dispatch) => {
        dispatch(toggleIsFetching(true));
        let data = await userAPI.getUsers(currentPage, pageSize);
        dispatch(toggleIsFetching(false));
        dispatch(setUsers(data.items));
        dispatch(setTotalUsersCount(data.totalCount));
    }
}

const followUnFollowFlow = async (dispatch, id, apiMethod, actionCreator) => {
    dispatch(toggleIsFetchingProgress(true, id));
    let data = await apiMethod(id);
    if (data.resultCode == 0) {
        dispatch(actionCreator(id))
    }
    dispatch(toggleIsFetchingProgress(false, id));
}

export const deleteUser = (id) => {
    return async (dispatch) => {
        let apiMethod = followAPI.deleteUser.bind(id)
        let actionCreator = unFollow;
        followUnFollowFlow(dispatch, id, apiMethod, actionCreator);
    }
}
export const postUser = (id) => {
    return async (dispatch) => {
        let apiMethod = followAPI.postUser.bind(id)
        let actionCreator = follow;
        followUnFollowFlow(dispatch, id, apiMethod, actionCreator);
    }
    /*return async (dispatch) => {
        dispatch(toggleIsFetchingProgress(true, id));
        let data = await followAPI.postUser(id);
        if (data.resultCode == 0) {
            dispatch(follow(id))
        }
        dispatch(toggleIsFetchingProgress(false, id));
    }*/
}
