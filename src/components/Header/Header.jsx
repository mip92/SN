import React from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";
import userPhoto from "../../asets/images/instami-avatarka-v-instagram-9.png";

const Header = (props) => {
    return <header className={s.header}>
        <img src='https://www.freelogodesign.org/Content/img/logo-ex-7.png'/>
        <div className={s.loginBlock}>
            {props.isAuth ? <div className={s.wrapper}>
                    <div className={s.item}><img src={props.smallPhoto == null ? userPhoto : props.smallPhoto}/></div>
                    <div className={s.item}> {props.login}</div>
                    <button className={s.item} onClick={props.LogoutAC}>Log out</button>
                </div>
                : <NavLink to="/login" activeClassName={s.activeLink}>Login</NavLink>}
        </div>
    </header>
}

export default Header;