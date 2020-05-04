import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import dialogsReducer from "./dialogs-reducer";
import dialogReducer from "./dialog-reducer";
import eventsReducer from "./events-reduser";
import usersReducer from "./users-reducer";
import myProfileReducer from "./profile-reducer";
import newsReducer from "./news-reducer";
import authReducer from "./auth-reducer";
import thunkMiddleware from "redux-thunk"
import { reducer as formReducer } from 'redux-form'
import appReducer from "./app-reducer";


let reducers = combineReducers(
    {
        postPage: dialogsReducer,
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

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)))


export default store;