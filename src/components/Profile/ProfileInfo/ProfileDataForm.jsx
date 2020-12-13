import React, {useEffect, useState} from 'react';
import {CreateFieldForProfile, Input} from "../../common/FormControls/FormControls";
import {requiredField} from "../../../utils/validators/validators";
import {reduxForm} from "redux-form";
import {Redirect} from "react-router-dom";

import {connect} from "react-redux";
import {sendForm} from "../../../redux/profileReducer";

const ProfileForm = ({onSubmit, profile, isOwner, handleSubmit, error}) => {
    debugger
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <div>
                    {!!isOwner ? <button>Сохранить</button>: ''}
                </div>
                <div>
                    {!!error ? <div><b>Ошибки:</b> <span>{error}</span></div>: ''}
                </div>
                <div>
                    <b>Full name</b> {CreateFieldForProfile(`fullName`, `fullName`, null, Input,'',profile.fullName,profile.fullName)}
                </div>
                <div>
                    <b>About me</b>{CreateFieldForProfile(`aboutMe`, `aboutMe`, null, Input, '', profile.aboutMe)}
                </div>
                <div>
                    <b>Looking for a jobe</b> <span>{CreateFieldForProfile(null, 'lookingForAJob', null, Input, "checkbox",profile.lookingForAJob)}</span>{/*{profile.lookingForAJob ? "да" : "нет"}*/}
                </div>
                <div>
                    {profile.lookingForAJob ?
                        <div><b>A Job Description</b> <span>{CreateFieldForProfile(`lookingForAJobDescription`,
                            `lookingForAJobDescription`,
                            null, Input,
                            'text', profile.lookingForAJobDescription, profile.lookingForAJobDescription)}</span></div> : ''}
                </div>

            </div>

            <div>
                {Object.keys(profile.contacts).map(key => {
                    return <div><b>{key}</b> <span>{CreateFieldForProfile(`${key}`, `${key}`, null, Input,'',profile.contacts[key], `c11212`)}</span> </div>
                })}
            </div>
        </form>
    )
}
const ProfileReduxDataForm = reduxForm({
    form: "profeleData"
})(ProfileForm)

const ProfileDataForm = (props) => {
    const onSubmit=(formData) => {
       props.sendForm(formData.aboutMe, formData.fullName, formData.github, formData.vk, formData.facebook,
            formData.instagram, formData.twitter, formData.website,
            formData.youtube, formData.mainLink, formData.lookingForAJobDescription, formData.lookingForAJob)
           .then(()=>props.deActivateMode())
       ;
    }
    if (props.isAuth) {
        return <Redirect to='/news'/>
    } else return (
        <span>
            <ProfileReduxDataForm profile={props.profile} onSubmit={onSubmit}  isOwner={props.isOwner}/>
        </span>
    )
}
//let LoginRedirectComponent = withAuthRedirect(Login)
let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
})
export default connect(mapStateToProps, {sendForm})(ProfileDataForm);
