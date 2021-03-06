import React from 'react';
import {InjectedFormProps, reduxForm} from "redux-form";
import {compose} from "redux";
import {connect} from "react-redux";
import {singInThunk, singOutThunk} from "../../Redux/auth-reducer";
import {Input, myCreateField} from "../common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../utilits/validators/validators";
import {Redirect} from "react-router-dom";
import style from "../common/FormsControls/FormsControls.module.css"
import {AppStateType} from "../../Redux/redux-store";

let maxLength40 = maxLengthCreator(40)

type LoginFormOwnProps = {
    captchaUrl: string | null
}

function LoginForm(props: InjectedFormProps<LoginFormDataType, LoginFormOwnProps> & LoginFormOwnProps) {
    let {handleSubmit, error, captchaUrl} = props;

    return <form onSubmit={handleSubmit}>
        {myCreateField<LoginFormDataTypeKeys>("Email", "Email", [required, maxLength40], "Input",)}
        {myCreateField<LoginFormDataTypeKeys>("Password", "Password", [required, maxLength40], "Input", {type: "password"})}
        {myCreateField<LoginFormDataTypeKeys>(undefined, "rememberMe", [], "Input", {type: "checkbox"}, "remember me")}

        {error && <div className={style.summaryError}>
            {error}
        </div>
        }
        {captchaUrl && <img src={captchaUrl}/>}
        {captchaUrl && myCreateField("Symbols from img", "captcha", [required], "input")}

        <div>
            <button>login</button>
        </div>
    </form>
}

const ReduxLoginForm = reduxForm<LoginFormDataType, LoginFormOwnProps>({
    form: 'login'
})(LoginForm);

type mapStateToPropsType = {
    isAuth: boolean
    captchaUrl: string | null
}


type mapDispatchToPropsType = {
    singOutThunk: (email: string, password: string, captcha: string) => void
    singInThunk: (email: string, password: string, captcha: string, rememberMe: boolean) => void
}

type LoginFormDataType = {
    Email: string
    Password: string
    captcha: string
    rememberMe: boolean
}

type LoginFormDataTypeKeys = Extract<keyof LoginFormDataType, string>

function Login(props: mapStateToPropsType & mapDispatchToPropsType) {

    const onSubmit = (formData: LoginFormDataType) => {
        props.singInThunk(formData.Email, formData.Password, formData.captcha, formData.rememberMe);
    };

    if (props.isAuth) {
        return <Redirect to={"/Profile"}/>;
    }
    return <div>
        <h1>Login</h1>
        <ReduxLoginForm
            onSubmit={onSubmit}
            captchaUrl={props.captchaUrl}/>

    </div>
}


let mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        captchaUrl: state.auth.captchaUrl,
        isAuth: state.auth.isAuth,
    }
}

const connectedUsersAPIComponent = compose(connect<mapStateToPropsType, mapDispatchToPropsType, {}, AppStateType>
(mapStateToProps, {singInThunk, singOutThunk}))(Login)

export default connectedUsersAPIComponent