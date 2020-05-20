import React from "react";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {AppStateType} from "../Redux/redux-store";


let mapStateToPropsAuth = (state:AppStateType) => {
    return {
        isAuth: state.auth.isAuth
    };
};
type MapStateToProps = ReturnType<typeof mapStateToPropsAuth>

function withAuthRedirect<WCP>  (WrappedComponent:React.ComponentType<WCP>)  {
    const RedirectComponent:React.FC<MapStateToProps>=(props)=> {
        let{isAuth, ...restProps}= props
        if (props.isAuth === false) return <Redirect to={"/Login"}/>
        return <WrappedComponent {...restProps as unknown as WCP}/>
    }

    let ConectedAuthRedirectComponent = connect<MapStateToProps,{},WCP,AppStateType>(mapStateToPropsAuth, {})(RedirectComponent);
    return ConectedAuthRedirectComponent
};

export default withAuthRedirect