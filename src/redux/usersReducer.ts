import {followAPI, userAPI} from "../api/api";
import {updateObjectArray} from "../utils/objectsHelpers";
import {PhotosType, UsersType} from "../types/types";

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
    ] as Array<UsersType>,
    pageSize: 5 as number,
    totalUsersCount: 0 as number,
    currentPage: 1 as number,
    numberChange: 0 as number,
    isFetching: false as boolean,
    followingInProgress: [] as Array<number>,///массив идшек юзеров
};
export type initialStateType = typeof initialState;
export const usersReducer = (state = initialState, action: any): initialStateType => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: updateObjectArray(state.users, action.userId, 'id', {followed: true})
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
                users: updateObjectArray(state.users, action.userId, 'id', {followed: false})
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
type FollowType = {
    type: typeof FOLLOW
    userId: number
}
export const follow = (userId: number): FollowType => {
    return {
        type: FOLLOW,
        userId,
    }
}
type UnFollowType = {
    type: typeof UNFOLLOW
    userId: number
}
export const unFollow = (userId: number): UnFollowType => {
    return {
        type: UNFOLLOW,
        userId,
    }
}
type SetUsersType = {
    type: typeof SET_USERS
    users: Array<UsersType>
}
export const setUsers = (users: Array<UsersType>): SetUsersType => {
    return {type: SET_USERS, users}
};
type SetCurrentPageType = {
    type: typeof SET_CURRENT_PAGE
    currentPage: number
}
export const setCurrentPage = (currentPage: number): SetCurrentPageType => {
    return {type: SET_CURRENT_PAGE, currentPage}
};
type SetTotalUsersCountType = {
    type: typeof SET_TOTAL_USERS_COUNT
    totalCount: number
}
export const setTotalUsersCount = (totalCount: number): SetTotalUsersCountType => {
    return {type: SET_TOTAL_USERS_COUNT, totalCount}
};
type OnNumberChangeType = {
    type: typeof ON_NUMBER_CHANGE
    number: any
}
export const onNumberChange = (number: any): OnNumberChangeType => {////////////////////////////////xzxzxzxzxzx
    return {type: ON_NUMBER_CHANGE, number}
};
type SearchNumberType = {
    type: typeof SEARCH_NUMBER
}

export const searchNumber = (): SearchNumberType => {
    return {type: SEARCH_NUMBER}
};
type ToggleIsFetchingType = {
    type: typeof TOGGLE_IS_FETCHING
    isFetching: boolean
}
export const toggleIsFetching = (isFetching: boolean): ToggleIsFetchingType => {
    return {type: TOGGLE_IS_FETCHING, isFetching}
};
type ToggleIsFetchingProgress = {
    type: typeof TOGGLE_IS_FETCHING_PROGRESS
    isFetching: boolean
    userId: number
}
export const toggleIsFetchingProgress = (isFetching: boolean, userId: number): ToggleIsFetchingProgress => {
    return {type: TOGGLE_IS_FETCHING_PROGRESS, isFetching, userId}
}
export const requestUsers = (currentPage: number, pageSize: number) => {
    return async (dispatch: any) => {
        dispatch(toggleIsFetching(true));
        let data = await userAPI.getUsers(currentPage, pageSize);
        dispatch(toggleIsFetching(false));
        dispatch(setUsers(data.items));
        dispatch(setTotalUsersCount(data.totalCount));
    }
}

const followUnFollowFlow = async (dispatch: any, id: number, apiMethod: any, actionCreator: any) => {
    dispatch(toggleIsFetchingProgress(true, id));
    let data = await apiMethod(id);
    if (data.resultCode == 0) {
        dispatch(actionCreator(id))
    }
    dispatch(toggleIsFetchingProgress(false, id));
}

export const deleteUser = (id: number) => {
    return async (dispatch: any) => {
        let apiMethod = followAPI.deleteUser.bind(id)
        let actionCreator = unFollow;
        followUnFollowFlow(dispatch, id, apiMethod, actionCreator);
    }
}
export const postUser = (id: number) => {
    return async (dispatch: any) => {
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
