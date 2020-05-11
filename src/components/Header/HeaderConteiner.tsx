import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {singOutThunk} from "../../Redux/auth-reducer";
import {AppStateType} from "../../Redux/redux-store";

type mapStateToPropsType = {
    userID?: null | number
    email?: null | string
    login: null | string
    isAuth: boolean
    captchaUrl?: null | string
}

type mapDispatchToPropsType =  {
    singOutThunk: (email: string, password: string, captcha: string)=>void
}

type HeaderContainerContainerType = mapStateToPropsType&mapDispatchToPropsType

class HeaderContainerIPA extends React.Component<HeaderContainerContainerType> {
    render() {
        return <Header {...this.props}/>
    }
}

let mapStateToProps = (state:AppStateType) => ({
    isAuth:  state.auth.isAuth,
    login:  state.auth.login,

});

const HeaderContainer = connect <mapStateToPropsType, mapDispatchToPropsType,{}, AppStateType>
(mapStateToProps, {singOutThunk})(HeaderContainerIPA)

export default HeaderContainer;