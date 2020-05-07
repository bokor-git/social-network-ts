import {getAuthUserData} from "./auth-reducer";
import {Action, Dispatch} from "redux";


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

export const initializedSuccess = ():InitializedSuccessActionType => {
    return {type: INITIALIZED_SUCCESS}
};
export const initializeApp = () => async (dispatch: Dispatch<Action>)=> {
  //  await dispatch(getAuthUserData())
    await dispatch(initializedSuccess())
};

export default appReducer;