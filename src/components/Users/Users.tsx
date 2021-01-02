import React from 'react';
import s from './Users.module.css';
import User from "./User";
import Paginator from "../common/Paginator/Paginator";
import {UsersType} from "../../types/types";

type PropsType = {
    currentPage: number;
    onPageChanged: (arg0: number)=>void;
    totalUsersCount: number;
    pageSize: number;
    users: Array<UsersType>
    followingInProgress: Array<number>;
    deleteUser: ()=>void;
    postUser: ()=>void;
}
const Users: React.FC<PropsType> = (props) => {

    return (
        <div>
            <div>
                Поиск по сайту
                <Paginator currentPage={props.currentPage}
                           onPageChanged={props.onPageChanged}
                           totalUsersCount={props.totalUsersCount}
                           pageSize={props.pageSize}
                />
            </div>
            {props.users.map((u: any) => <User key={u.id}
                                          user={u}
                                          followingInProgress={props.followingInProgress}
                                          deleteUser={props.deleteUser}
                                          postUser={props.postUser}
                />
            )}
        </div>
    )
}

export default Users;