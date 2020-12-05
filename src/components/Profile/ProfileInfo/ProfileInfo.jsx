import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import facebook from "../../../asets/social_icons/Social Icons by Dreamstale (6).png";
import website from "../../../asets/social_icons/Social Icons by Dreamstale (1).png";
import vk from "../../../asets/social_icons/vk.png"
import twitter from "../../../asets/social_icons/Social Icons by Dreamstale (5).png";
import instagram from "../../../asets/social_icons/Social Icons by Dreamstale (33).png";
import youtube from "../../../asets/social_icons/Social Icons by Dreamstale (35).png";
import github from "../../../asets/social_icons/25231.svg";
import DialogItem from "../../Dialogs/DialogItem/DialogItem";
import ProfileStatus from "../../ProfileStatus/ProfileStatus";
import userPhoto from "../../../asets/images/instami-avatarka-v-instagram-9.png"
import ProfileStatusWithHooks from "../../ProfileStatus/ProfileStatusWithHooks";


const ProfileInfo = ({profile, status, updateStatus}) => {
    let links = () => {
        let method2 = JSON.parse(JSON.stringify(profile.contacts));
        for (let [key, value] of Object.entries(profile.contacts)) {
            if (value === 'null') return (<div>s</div>)
            else {
                return (<a href={value}>{key}</a>)
            }
            //alert(`${key} ${value}`); // name:John, затем age:30
        }
    }
    if (profile == null || profile == undefined) {
        return <Preloader/>
    }

    return <div>
        {/*<div>
            <img
                src='https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&h=350'/>
        </div>*/}
        <div className={s.descriptionBlock}>
            <img src={profile.photos.large != null ? profile.photos.large : userPhoto}
                 className={s.userPhoto}/>
            <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/> {/*{props.profile.aboutMe}*/}

            <div id="menu">
                <div>
                    {/*{links()}*/}
                </div>
                <a href={`http://` + `${profile.contacts.facebook}`}><img src={facebook}/></a>
                <a href={`http://` + `${profile.contacts.website}`}><img src={website}/></a>
                <a href={`http://` + `${profile.contacts.vk}`}><img src={vk}/></a>
                <a href={profile.contacts.twitter}><img src={twitter}/></a>
                <a href={`http://` + `${profile.contacts.instagram}`}><img src={instagram}/></a>
                <a href={`http://` + `${profile.contacts.youtube}`}><img src={youtube}/></a>
                <a href={`http://` + `${profile.contacts.github}`}><img src={github}/></a>
            </div>
        </div>
    </div>
}

export default ProfileInfo;