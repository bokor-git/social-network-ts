import React from "react";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";


let mapStateToPropsAuth = (state) => {
    return {
        isAuth: state.auth.isAuth
    };
};


const withAuthRedirect = (Component) => {
    class RedirectComponent extends React.Component {
        render() {
            if (this.props.isAuth === false) return <Redirect to={"/Login"}/>
            return <Component {...this.props}/>
        }
    }

    let ConectedAuthRedirectComponent = connect(mapStateToPropsAuth, {})(RedirectComponent);
    return ConectedAuthRedirectComponent
};

export default withAuthRedirect