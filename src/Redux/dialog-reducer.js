
const SEND_MASSAGE = "SEND_MASSAGE";
export const sendMassageCreator = (massage) => {
    return {type: SEND_MASSAGE, massage}
}
let initialState = {
    massageData: [
        {id: 1, text: "Yo, get up"},
        {id: 2, text: "How are you"},
        {id: 3, text: "Yo, get up"}],
    dialogsData: [
        {id: 1, name: "Bohdan"},
        {id: 2, name: "Florian"},
        {id: 3, name: "Robert"}],
}
const dialogReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MASSAGE: {
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