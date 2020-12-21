import React from 'react';
import s from '../common/FormControls/FormControls.module.css';
import {Field, reduxForm} from "redux-form";
import {Input, CreateField} from "../common/FormControls/FormControls";
import {requiredField} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {getStatus, getUserProfile, updateStatus} from "../../redux/profileReducer";
import {LoginAC, LogoutAC} from "../../redux/authReducer";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {Redirect} from "react-router-dom";


const LoginForm = ({handleSubmit, error, captchaUrl}) => {
    return (
        <form onSubmit={handleSubmit}>
            {CreateField("Email", 'email', [requiredField], Input)}
            {CreateField("Password", 'password', [requiredField], Input, "password")}
            {CreateField(null, 'rememberMe', null, Input, "checkbox", "RememberMe")}
            {captchaUrl && <div><img src={captchaUrl}/>{CreateField("captcha", 'captcha', [requiredField], Input)}</div>}
            {error && <div className={s.formSummmayError}>
                {error}
            </div>}

            <div>
                <button>Login</button>
            </div>
        </form>

    )
}
const LoginReduxForm = reduxForm({
    form: "login"
})(LoginForm)
const Login = (props) => {
    const onSubmit = (formData) => {
        props.LoginAC(formData.email, formData.password, formData.rememberMe, formData.captcha)
        console.log(formData)
    }
    if (props.isAuth) {
        return <Redirect to='/profile'/>
    } else return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl}/>
        </div>
    )
}

let LoginRedirectComponent = withAuthRedirect(Login)
let mapStateToProps = (state) => ({
    captchaUrl: state.auth.captchaUrl,
    isAuth: state.auth.isAuth,
})
export default connect(mapStateToProps, {LogoutAC, LoginAC})(Login);