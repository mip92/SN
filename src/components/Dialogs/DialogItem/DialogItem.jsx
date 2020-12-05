import React from 'react';
import s from './../Dialogs.module.css';
import {NavLink} from "react-router-dom";
import Avatar from "./Avatar/Avatar";

const DialogItem = (props) => {
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={"/dialogs/" + props.id}><Avatar state={props}/></NavLink>
        </div>
    )
}

export default DialogItem;