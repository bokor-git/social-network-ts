import {getAuthUserData} from "./auth-reducer";
import {Action, Dispatch} from "redux";
import {ThunkAction} from "redux-thunk";
import {AppStateType} from "./redux-store";


const INITIALIZED_SUCCESS = "INITIALIZED_SUCCESS";

type AppReducerActionType={
    type: typeof INITIALIZED_SUCCESS
}
type InitialStateType={
    initialized:boolean
}
let initialState:InitialStateType = {
    initialized: false,
};

const appReducer = (state = initialState, action:AppReducerActionType):InitialStateType => {
    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true
            };
        default:
            return state
    }
};


type InitializedSuccessActionType={
    type: typeof INITIALIZED_SUCCESS
}

type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, AppReducerActionType>


export const initializedSuccess = ():InitializedSuccessActionType => {
    return {type: INITIALIZED_SUCCESS}
};
export const initializeApp = ():ThunkType => async (dispatch)=> {
    await dispatch(getAuthUserData())
    await dispatch(initializedSuccess())
};

export default appReducer;