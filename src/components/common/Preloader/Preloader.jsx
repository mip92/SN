import React from 'react';
import s from './Preloader.module.css';
import preloader from "../../../asets/svg/Double Ring-2.2s-200px.svg";

const Preloader = (props) => {
    return (
        <div>
            <img src={preloader}/>
        </div>
    )
}

export default Preloader;