import React from 'react';
import s from './Sidebar.module.css';
import Sidebarfriends from "./Sidebarfriends/Sidebarfriends";
import DialogItem from "../../Dialogs/DialogItem/DialogItem";

const Sidebar = (props) => {

    window.onload=()=>{props.addFriends()}
    let threefriends = props.threefriends.map((d) => <Sidebarfriends name={d.name} key={d.id}  ava={d.ava}/>)

    return (
        <div>
           FRIENDS

            <div className={s.wrapper}>
                {threefriends}
            </div>
        </div>
    )
}

export default Sidebar;