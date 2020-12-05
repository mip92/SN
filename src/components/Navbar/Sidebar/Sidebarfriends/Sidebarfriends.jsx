import React from 'react';
import s from './Sidebarfriends.module.css';

const Sidebarfriends = (props) => {
    return (
        <div className={s.avatar}>
            <img src={props.ava}/>
            <div>{props.name}</div>
        </div>
    )
}

export default Sidebarfriends;