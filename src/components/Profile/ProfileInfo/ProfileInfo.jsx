import React, {useEffect, useState} from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import userPhoto from "../../../asets/images/instami-avatarka-v-instagram-9.png"
import ProfileStatusWithHooks from "../../ProfileStatus/ProfileStatusWithHooks";
import Contact from "../../Contact/Contact";
import ProfileDataForm from "./ProfileDataForm";


const ProfileInfo = ({isOwner, profile, status, updateStatus, savePhoto}) => {
    let [editMode, setEditMode] = useState(false)
    let activateMode = () => {
        setEditMode(true);
    }
    let deActivateMode = () => {
        setEditMode(false);
    }
    if (profile == null || profile == undefined) {
        return <Preloader/>
    }
    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0])
        }
    }
    //let contactsMap = new Map();
    //for(let i=0;i<8;i++){if (Object.values(profile.contacts)[i] !=null) contactsMap.set(Object.keys(profile.contacts)[i], Object.values(profile.contacts)[i]);}

    return <div>
        <div className={s.descriptionBlock}>
            <img src={profile.photos.large != null ? profile.photos.large : userPhoto}
                 className={s.userPhoto}/>
            {!!isOwner ? <input type='file' onChange={onMainPhotoSelected}/> : ""}
            <ProfileStatusWithHooks isOwner={isOwner} status={status} updateStatus={updateStatus}/> {/*{props.profile.aboutMe}*/}
            {editMode
                ?<ProfileDataForm initialValues={profile} /*profile={profile}*/ deActivateMode={deActivateMode} isOwner={isOwner}/>
                : <ProfileData  profile={profile} isOwner={isOwner} activateMode={activateMode}/>}
        </div>
    </div>
}
const ProfileData = ({profile, isOwner, activateMode}) => {
    return (
        <div>

            <div>
                <div>
                    {!!isOwner ? <button onClick ={activateMode}>Перейти в режим редактирования</button>: ''}
                </div>
                <div>
                    <b>Full name</b> {profile.fullName}
                </div>

                <div>
                    <b>About me</b> {profile.aboutMe}
                </div>
                <div>
                    <b>Looking for a jobe</b> {profile.lookingForAJob ? "да" : "нет"}
                </div>
                <div>
                    {profile.lookingForAJob ?
                        <div><b>A Job Description</b> <span>{profile.lookingForAJobDescription}</span></div> : ''}
                </div>

            </div>

            <div>
                {
                    Object.keys(profile.contacts).map(key => {
                    if (profile.contacts[key] != null) return <Contact key={key} contactTitle={key}
                                                                       value={profile.contacts[key]}/>
                    else return ''
                })}
            </div>
        </div>
    )
}
/*const ProfileDataForm = ({profile, deActivateMode, isOwner}) => {
    return (
        <div>
            <div>
                <div>
                    <b>Full name</b> {profile.fullName}
                </div>
                <div>
                    {!!isOwner ? <button onClick ={deActivateMode}>Выйти из режима редактирования</button>: ''}
                </div>
                <div>
                    <b>About me</b> {profile.aboutMe}
                </div>
                <div>
                    <b>Looking for a jobe</b> {profile.lookingForAJob ? "да" : "нет"}
                </div>
                <div>
                    {profile.lookingForAJob ?
                        <div><b>A Job Description</b> <span>{profile.lookingForAJobDescription}</span></div> : ''}
                </div>

            </div>

            <div>
                {Object.keys(profile.contacts).map(key => {
                    return <div><b>{key}</b> <input/></div>
                })}
            </div>
        </div>
    )
}*/

export default ProfileInfo;