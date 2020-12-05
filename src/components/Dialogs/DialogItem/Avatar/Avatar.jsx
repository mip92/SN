import React from 'react';
import s from './Avatar.module.css';

const Avatar = (props) => {
    return (
        <div>
            <span className={s.avatar}>
                <img src={props.state.ava}/>
            </span>
            <span>{props.state.name}</span>
        </div>
    )
}

export default Avatar;