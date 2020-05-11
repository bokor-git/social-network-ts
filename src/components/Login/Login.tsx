import React, {FormEvent, FormEventHandler} from 'react';
import {Field, reduxForm} from "redux-form";
import {compose} from "redux";
import {connect, DefaultRootState} from "react-redux";
import {singInThunk, singOutThunk} from "../../Redux/auth-reducer";
import {Input, myCreateField} from "../common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../utilits/validators/validators";
import {Redirect} from "react-router-dom";
import style from "../common/FormsControls/FormsControls.module.css"
import {AppStateType} from "../../Redux/redux-store";

let maxLength40 = maxLengthCreator(40)

type LoginFormType = {
    captchaUrl: string
    handleSubmit:FormEvent<HTMLFormElement>
    error:string

}
const LoginForm = ({handleSubmit, error, captchaUrl}:LoginFormType) => {

    // @ts-ignore
    return <form onSubmit={handleSubmit}>
        <div><Field placeholder={"Email"} name={"Email"} component={Input} validate={[required, maxLength40]}/></div>
        <div><Field placeholder={"Password"} name={"Password"} component={Input} type={"password"}
                    validate={[required, maxLength40]}/></div>
        <div><Field type={"checkbox"} name={"rememberMe"} component={Input}/> remember me</div>
        {error && <div className={style.summaryError}>
            {error}
        </div>
        }
        {captchaUrl&& <img src={captchaUrl}/> }
        {captchaUrl&&  myCreateField("Symbols from img", "captcha", [required], "input")}

        <div>
            <button>login</button>
        </div>
    </form>
};

const ReduxLoginForm = reduxForm ({
    form: 'login'
    // @ts-ignore
})(LoginForm);

type mapStateToPropsType = {
    userID?: null | number
    email?: null | string
    login?: null | string
    isAuth: boolean
    captchaUrl: null | string
}


type mapDispatchToPropsType =  {
    singOutThunk: (email: string, password: string, captcha: string)=>void
    singInThunk: (email: string, password: string, captcha: string) =>void
}

type OwnProps = {
    onSubmit: FormEventHandler<"login">;
}

type formDataType = {
    Email:string
    Password:string
    captcha:string
}
type LoginContainerPropsType= mapDispatchToPropsType& mapStateToPropsType&OwnProps
class UsersAPIComponent extends React.Component<LoginContainerPropsType> {

    onSubmit = (formData:formDataType) => {
        this.props.singInThunk(formData.Email, formData.Password, formData.captcha);
    };

    render() {
        debugger
        if (this.props.isAuth) {
            return <Redirect to={"/Profile"}/>;
        }

        return <div>
            <h1>Login</h1>
            <ReduxLoginForm
                // @ts-ignore
                onSubmit={this.onSubmit}
                captchaUrl={this.props.captchaUrl} />

        </div>
    }
};


let mapStateToProps = (state:AppStateType) => {
    return {
        captchaUrl:state.auth.captchaUrl,
        isAuth: state.auth.isAuth,
    }
}

const connectedUsersAPIComponent = compose(connect  <mapStateToPropsType, mapDispatchToPropsType, OwnProps, AppStateType>
(mapStateToProps, {singInThunk, singOutThunk}))(UsersAPIComponent)

export default connectedUsersAPIComponent