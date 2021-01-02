import {createSelector} from "reselect";
import {AppStateType} from "./reduxstore";

export const getUsers=(state: AppStateType)=>{
    return state.usersPage.users;
}

export const getUsersSelector=(state: AppStateType)=>{
    return getUsers(state).filter(u=>true);
}

export const getUsersSuperSelector = createSelector(getUsers, (users)=>{
    return users.filter(u=>true);
})

export const getPageSize=(state: AppStateType)=>{
    return state.usersPage.pageSize;
}

export const getTotalUsersCount=(state: AppStateType)=>{
    return state.usersPage.totalUsersCount;
}

export const getCurrentPage=(state: AppStateType)=>{
    return state.usersPage.currentPage;
}

export const getNumberChange=(state: AppStateType)=>{
    return state.usersPage.totalUsersCount;
}

export const getIsFetching=(state: AppStateType)=>{
    return state.usersPage.isFetching;
}
export const getFollowingInProgress=(state: AppStateType)=>{
    return state.usersPage.followingInProgress;
}