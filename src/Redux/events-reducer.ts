import {Action, Dispatch} from "redux";
import {ThunkAction} from "redux-thunk";
import {AppStateType} from "./redux-store";

const ADD_EVENT = "ADD_EVENT";
const CLEAN = "CLEAN";

type AddEventType = {
    type: typeof ADD_EVENT
    eventID: number
    evText: string
}
export const addEvent = (eventID:number, evText:string):AddEventType =>  {
    return {type: ADD_EVENT, eventID: eventID, evText: evText}
};

type CleanType = {
    type: typeof CLEAN
}
export const clean = ():CleanType => {
    return {type: CLEAN}
};

export type EventType = {
    id: number
    text: string
    poster: string
    type: string
}
type initialStateType={
    eventData: Array<EventType>
    myEvents: Array<{}>

}


let initialState:initialStateType = {
    eventData: [
        {
            id: 1,
            text: "Trail Voskresinitska gora",
            poster: "https://image.freepik.com/free-vector/_21856-1.jpg",
            type: "full"
        },
        {
            id: 2,
            text: "Blue Lake Cup Spring 2020",
            poster: "https://sportevent.com.ua/image/t/250/250/img/1574/662.png",
            type:"5km"
        },
        {
            id: 3,
            text: "Kharkiv Half Marathon 2020",
            poster: "https://sportevent.com.ua/image/t/250/250/img/1464/630.jpg",
            type: "full"
        },
        {
            id: 4,
            text: "4th RAIN Mohrytsia Eco Trail 2020",
            poster: "https://sportevent.com.ua/image/t/250/250/img/1568/656.jpg",
            type: "10km"
        },
        {
            id: 5,
            text: "Sumy Duathlon 27.5",
            poster: "https://saycheese.com.ua/wp-content/uploads/2020/03/photo_2020-03-26-17.05.36.jpeg",
            type: "10km"
        },
        {
            id: 6,
            text: "Blue Lake Cup Spring 2020",
            poster: "https://www.active.net.ua/wp-content/uploads/2017/10/RAIN-Mohrytsia-Eco-Trail-2020.jpg",
            type: "half"
        },
        {
            id: 7,
            text: "Kharkiv International Marathon",
            poster: "https://www.active.net.ua/wp-content/uploads/2016/12/Kharkiv-International-Marathon.jpg",
            type: "half"
        },
        {
            id: 8,
            text: "4th RAIN Mohrytsia Eco Trail 2020",
            poster: "https://image.shutterstock.com/image-vector/running-marathon-people-run-colorful-600w-633344339.jpg",
            type: "full"
        },],
    myEvents: []
};

type ActionTypes= AddEventType| CleanType

const eventsReducer = (state = initialState, action:ActionTypes)=> {
    switch (action.type) {
        case ADD_EVENT:
            state.eventData.map(i => {
                if (action.eventID === i.id) {
                    state.myEvents.push(action.evText)
                }
            });
            return {
                ...state, myEvents: [...state.myEvents]
            };
        case CLEAN:
            return {
                ...state, myEvents: []
            };
        default:
            return state
    }

};

type ThunkType = ThunkAction<void, AppStateType, unknown, ActionTypes>

export const cleanThunk=():ThunkType=>(dispatch)=>{
    dispatch(clean())
}

export default eventsReducer;