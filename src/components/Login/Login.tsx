import React from 'react';
import s from '../common/FormControls/FormControls.module.css';
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Input, CreateField} from "../common/FormControls/FormControls";
import {requiredField} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {getStatus, getUserProfile, updateStatus} from "../../redux/profileReducer";
import {LoginAC, LogoutAC} from "../../redux/authReducer";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {Redirect} from "react-router-dom";
import {AppStateType} from "../../redux/reduxstore";
import {compose} from "redux";


const LoginForm: React.FC<InjectedFormProps<FormDataType, OwnPropsType> & OwnPropsType> = ({handleSubmit, error, captchaUrl}) => {
    return (
        <form onSubmit={handleSubmit}>
            {CreateField<LoginFormPropertiesType>("Email", 'email', [requiredField], Input, 'input')}
            {CreateField<LoginFormPropertiesType>("Password", 'password', [requiredField], Input, "password", "password")}
            {CreateField<LoginFormPropertiesType>(null, 'rememberMe', null, Input, "checkbox", "checkbox",)}
            {captchaUrl &&
            <div><img src={captchaUrl}/>{CreateField<LoginFormPropertiesType>("captcha", 'captcha', [requiredField], Input, 'input')}</div>}
            {error && <div className={s.formSummmayError}>
                {error}
            </div>}

            <div>
                <button>Login</button>
            </div>
        </form>

    )
}
const LoginReduxForm = reduxForm<FormDataType, OwnPropsType>({
    form: "login"
})(LoginForm)


type MapStatePropsType = {
    captchaUrl: string | null,
    isAuth: boolean,
}
type MapDispatchPropsType = {
    LogoutAC: () => void,
    LoginAC: (email: string,
              password: string,
              rememberMe: boolean,
              captcha: string) => void,
}
type OwnPropsType = {
    captchaUrl: string |null;
}
type PropsType = MapStatePropsType & MapDispatchPropsType & OwnPropsType;
export type FormDataType = {
    email: string;
    password: string;
    rememberMe: boolean;
    captcha: string;
}
type LoginFormPropertiesType=keyof FormDataType
const Login = (props: PropsType) => {
    const onSubmit = (formData: FormDataType) => {
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
let mapStateToProps = (state: AppStateType): MapStatePropsType => ({
    captchaUrl: state.auth.captchaUrl,
    isAuth: state.auth.isAuth,
})
export default compose(
    connect<MapStatePropsType, MapDispatchPropsType, OwnPropsType, AppStateType>(mapStateToProps, {
        LogoutAC, LoginAC
    })
)(Login);