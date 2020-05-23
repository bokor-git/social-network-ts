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
    singOutThunk: (email: string|null, password: string|null, captcha: string|null)=>void
}

type HeaderContainerContainerType = mapStateToPropsType&mapDispatchToPropsType

function HeaderContainerIPA(props: HeaderContainerContainerType) {
    return <Header {...props}/>
}

let mapStateToProps = (state:AppStateType) => ({
    isAuth:  state.auth.isAuth,
    login:  state.auth.login,

});

const HeaderContainer = connect <mapStateToPropsType, mapDispatchToPropsType,{}, AppStateType>
(mapStateToProps, {singOutThunk})(HeaderContainerIPA)

export default HeaderContainer;