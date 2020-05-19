import {Action, applyMiddleware, combineReducers, compose, createStore} from "redux";
import postsReducer from "./posts-reducer";
import dialogReducer from "./dialog-reducer";
import eventsReducer from "./events-reducer";
import usersReducer from "./users-reducer";
import myProfileReducer from "./profile-reducer";
import newsReducer from "./news-reducer";
import authReducer from "./auth-reducer";
import thunkMiddleware, {ThunkAction} from "redux-thunk"
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


export type InferActionTypes<T> = T extends {[key: string]: (...args:any[])=>infer U} ? U: never

export type BaseThunkType<A extends Action, R= Promise<void>> = ThunkAction<R, AppStateType, unknown, A>

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducers, composeEnhancers(applyMiddleware(thunkMiddleware)))


export default store;