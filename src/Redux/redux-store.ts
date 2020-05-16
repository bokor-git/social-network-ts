import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import postsReducer from "./posts-reducer";
import dialogReducer from "./dialog-reducer";
import eventsReducer from "./events-reducer";
import usersReducer from "./users-reducer";
import myProfileReducer from "./profile-reducer";
import newsReducer from "./news-reducer";
import authReducer from "./auth-reducer";
import thunkMiddleware from "redux-thunk"
import { reducer as formReducer } from 'redux-form'
import appReducer from "./app-reducer";


let rootReducers = combineReducers(
    {
        postPage: postsReducer,
        dialogPage: dialogReducer,
        eventPage: eventsReducer,
        usersPage: usersReducer,
        myProfilePage: myProfileReducer,
        newsPage: newsReducer,
            auth: authReducer,
        form: formReducer,
        app: appReducer
    }
);

type RootReducersType = typeof rootReducers
export type AppStateType = ReturnType<RootReducersType>

type PropertiesType<T> = T extends {[key: string]: infer U}? U: never

export type InferActionTypes<T extends {[key: string]: (...args:any[])=>any}> = ReturnType<PropertiesType<T>>

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducers, composeEnhancers(applyMiddleware(thunkMiddleware)))


export default store;