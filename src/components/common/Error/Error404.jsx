import React from 'react';
import s from './Error404.module.css';
import error from "../../../asets/svg/868843.svg";

const Error404 = (props) => {
    return (
        <div>
            <img className={s.error} src={error}/>
        </div>
    )
}

export default Error404;