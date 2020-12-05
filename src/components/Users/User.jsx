import React from 'react';
import s from './Users.module.css';
import userPhoto from "../../asets/images/instami-avatarka-v-instagram-9.png";
import {NavLink} from "react-router-dom";
import {followAPI} from "../../api/api";
import {deleteUser} from "../../redux/usersReducer";
import {maxLengthCreator, requiredField} from "../../utils/validators/validators";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../common/FormControls/FormControls";
import {Paginator} from "../common/Paginator/Paginator";

const User = ({user, followingInProgress, deleteUser, postUser}) => {
    return (<div className={s.margin}>
            <div className={s.wrapper}>
                <div className={s.photo}>
                    <NavLink to={'/profile/' + user.id}>
                        <img src={user.photos.large != null ? user.photos.large : userPhoto} className={s.userPhoto}/>
                    </NavLink>
                </div>
                <div className={s.name}>{user.name}</div>
                <div className={s.city}>{user.id}</div>
                <div className={s.status}>{user.status != null ? user.status : "userStatus"}</div>
                <div className={s.button}>
                    {user.followed
                        ? <button disabled={followingInProgress.some(id => id == user.id)} onClick={() => {
                            deleteUser(user.id)
                        }}>Отписаться</button>
                        : <button disabled={followingInProgress.some(id => id == user.id)} onClick={() => {
                            postUser(user.id)
                        }}>Подписаться</button>
                    }
                </div>
                <div className={s.country}>{"props.location.country"}</div>
            </div>
        </div>
    )
}

export default User;