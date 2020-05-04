import React from 'react';
import './App.css';
import Profile from "./components/Profile-menu/Profile";
import Category from "./components/Category/Category";
import {BrowserRouter, HashRouter, Redirect, Route, Switch, withRouter} from "react-router-dom";
import Posts from "./components/Posts/Posts";
import UsersContainer from "./components/Users/UsersContainer";
import UserProfileContainer from "./components/Users/UserProfile/UserProfileContainer";
import NewsContainer from "./components/News/NewsContainer";
import EventContainer from "./components/Events/EventContainer";
import MyEventContainer from "./components/MyEvents/MyEventContainer";
import HeaderContainer from "./components/Header/HeaderConteiner";
import Login from "./components/Login/Login";
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./Redux/app-reducer";
import Loading from "./components/common/Conponents/Loading";
import store from "./Redux/redux-store";
import withSuspense from "./hoc/Suspense";
import Calc from "./components/Store/Store";
import TodoList from "./components/Store/Todo";
//import DialogsContainer from "./components/Dialogs/DialogsContainer";
const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));


class App extends React.Component {
    catchAllUnhandledErrors=(promiseRejectionEvent)=>{
        alert(promiseRejectionEvent.reason);
    };
    componentDidMount() {
        this.props.initializeApp()
        window.addEventListener("unhandledrejection", this.catchAllUnhandledErrors )
    }
    componentWillUnmount() {
        window.removeEventListener("unhandledrejection", this.catchAllUnhandledErrors )
    }

    render() {
        if (!this.props.initialized) {
            return <Loading/>
        }
        return (
            <div className="wrapper">
                <HeaderContainer store={this.props.store}/>
                <Profile/>
                <Category/>
                <div className="wrapper-content">
                    <Switch>
                    <Redirect exact from="/"  to="/Profile" />
                    <Route exact path="/Profile/:userID?" render={() => (<UserProfileContainer/>)}/>
                    <Route path="/Events" render={() => (<EventContainer/>)}/>
                    <Route exact path="/Dialogs" render={withSuspense(DialogsContainer)}/>
                    <Route exact path="/Posts" render={() => (<Posts/>)}/>
                    <Route exact path="/Users" render={() => (<UsersContainer/>)}/>
                    <Route exact path="/News" render={() => (<NewsContainer/>)}/>
                    <Route exact path="/Login" render={() => (<Login/>)}/>
                        <Route exact path="/Store" render={() => (<Calc/>)}/>
                    <Route exact path="*" render={() => <h1>Error 404 </h1>}/>
                    </Switch>
                </div>
                <MyEventContainer store={this.props.store}/>
            </div>
        )

    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
});

const AppContainer = compose(
    withRouter,
    connect(mapStateToProps, {initializeApp})
)(App);


const SocialNetworkApp = (props) => {
    return <HashRouter>
        <Provider store={store}>
            <AppContainer/>
        </Provider>
    </HashRouter>
};

export default SocialNetworkApp




