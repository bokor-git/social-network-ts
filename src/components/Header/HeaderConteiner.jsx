import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {singOutThunk} from "../../Redux/auth-reducer";


class HeaderContainerIPA extends React.Component {
    render() {
        return <Header {...this.props}/>

    }
}

let mapStateToProps = (state) => ({
    isAuth:  state.auth.isAuth,
    login:  state.auth.login
});

const HeaderContainer = connect(mapStateToProps, { singOutThunk})(HeaderContainerIPA)

export default HeaderContainer;