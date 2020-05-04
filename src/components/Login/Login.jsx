import React from 'react';
import {Field, reduxForm} from "redux-form";
import {compose} from "redux";
import {connect} from "react-redux";
import {singInThunk, singOutThunk} from "../../Redux/auth-reducer";
import {Input, myCreateField} from "../common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../utilits/validators/validators";
import {Redirect} from "react-router-dom";
import style from "../common/FormsControls/FormsControls.module.css"

let maxLength40 = maxLengthCreator(40)
const LoginForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div><Field placeholder={"Email"} name={"Email"} component={Input} validate={[required, maxLength40]}/></div>
        <div><Field placeholder={"Password"} name={"Password"} component={Input} type={"password"}
                    validate={[required, maxLength40]}/></div>
        <div><Field type={"checkbox"} name={"rememberMe"} component={Input}/> remember me</div>
        {props.error && <div className={style.summaryError}>
            {props.error}
        </div>
        }
        {props.captchaUrl&& <img src={props.captchaUrl}/> }
        {props.captchaUrl&&  myCreateField("Symbols from img", "captcha", [required], "input")}

        <div>
            <button>login</button>
        </div>
    </form>
};
const ReduxLoginForm = reduxForm({
    form: 'login'
})(LoginForm);

class UsersAPIComponent extends React.Component {
    onSubmit = (formData) => {
        this.props.singInThunk(formData.Email, formData.Password, formData.captcha);
    };

    render() {
        debugger
        if (this.props.isAuth) {
            return <Redirect to={"/Profile"}/>;
        }
        return <div>
            <h1>Login</h1>
            <ReduxLoginForm onSubmit={this.onSubmit} captchaUrl={this.props.captchaUrl} />

        </div>
    }
};


let mapStateToProps = (state) => {
    return {
        captchaUrl:state.auth.captchaUrl,
        isAuth: state.auth.isAuth,
    }
}

const connectedUsersAPIComponent = compose(connect(mapStateToProps, {singInThunk, singOutThunk}))(UsersAPIComponent)

export default connectedUsersAPIComponent