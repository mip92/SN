import React from 'react';
import s from './Users.module.css';
import userPhoto from "../../asets/images/instami-avatarka-v-instagram-9.png";
import {NavLink} from "react-router-dom";
import {followAPI} from "../../api/api";
import {deleteUser} from "../../redux/usersReducer";
import {maxLengthCreator, requiredField} from "../../utils/validators/validators";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../common/FormControls/FormControls";

import User from "./User";
import Paginator from "../common/Paginator/Paginator";
const Users = (props) => {
    const onSubmit = (formData) => {
        props.onPageChanged(formData.searchPage)
    }

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
            {props.users.map((u) => <User key={u.id}
                                          className={s.margin}
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