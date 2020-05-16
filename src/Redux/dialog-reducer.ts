import {InferActionTypes} from "./redux-store";

export const action = {
    sendMassageCreator: (massage:string) => ({type: "SEND_MASSAGE", massage :massage} as const)
}

type InitialStateType={
    massageData: Array<{id: number, text: string}>
    dialogsData: Array<{id: number, name: string}>
}

let initialState:InitialStateType = {
    massageData: [
        {id: 1, text: "Yo, get up"},
        {id: 2, text: "How are you"},
        {id: 3, text: "Yo, get up"}],
    dialogsData: [
        {id: 1, name: "Bohdan"},
        {id: 2, name: "Florian"},
        {id: 3, name: "Robert"}],
}

type ActionType = InferActionTypes<typeof action>
const dialogReducer = (state = initialState, action:ActionType):InitialStateType => {
    switch (action.type) {
        case "SEND_MASSAGE": {
            return {
                ...state,
                massageData: [...state.massageData, {id: 6, text: action.massage} ]
            };
        }
        default:
            return state
    }

}
export default dialogReducer;