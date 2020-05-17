import {getAuthUserData} from "./auth-reducer";
import {ThunkAction} from "redux-thunk";
import {AppStateType, BaseThunkType, InferActionTypes} from "./redux-store";



let initialState = {
    initialized: false,
};

const actions = {
    initializedSuccess: () => ({type: "INITIALIZED_SUCCESS"} as const)
}

type ActionsTypes = InferActionTypes<typeof actions>


type InitialStateType= typeof initialState
const appReducer = (state = initialState, action:ActionsTypes) => {
    switch (action.type) {
        case "INITIALIZED_SUCCESS":
            return {
                ...state,
                initialized: true
            };
        default:
            return state
    }
};

type ThunkType = BaseThunkType<ActionsTypes>



export const initializeApp = ():ThunkType => async (dispatch)=> {
    await dispatch(getAuthUserData())
    await dispatch(actions.initializedSuccess())
};

export default appReducer;