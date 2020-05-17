import {ResponseResultCode} from "../api/api";
import {UserType} from  "../types/types"
import {ThunkAction} from "redux-thunk";
import {AppStateType, BaseThunkType, InferActionTypes} from "./redux-store";
import {Dispatch} from "redux";
import {userAPI} from "../api/users-api";


export const actions = {
    followSuccess: (userID: number) => ({type: "FOLLOW", userID}  as const),
    unfollowSuccess: (userID: number) => ({type: "UNFOLLOW", userID} as const),
    setUsers: (users: Array<UserType>) => ({type: "SET_USERS", users} as const),
    setCurrentPage: (currentPage: number) => ({type: "SET_CURRENT_PAGE", currentPage} as const),
    setTotalUsersCount: (totalCount: number) => ({type: "SET_TOTAL_USERS", totalCount: totalCount} as const),
    toggleFetching: (isFetching: boolean) => ({type: "TOGGLE_IS_FETCHING", isFetching} as const),
    toggleFollowingProgress: (isFetching: boolean, userID: number) =>  ({type: "FOLLOFING_IN_PROGRESS", isFetching, userID} as const)
}

type ActionsTypes = InferActionTypes<typeof actions>

let initialState = {
    users: [] as Array<UserType>,
    pageSize: 7,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: [] as Array<number>
};

export type InitialStateType = typeof initialState
const usersReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case "FOLLOW":
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userID) {
                        return {...u, followed: true}
                    }
                    return u
                }),
            };
        case "UNFOLLOW":
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userID) {
                        return {...u, followed: false}
                    }
                    return u
                }),
            };
        case "SET_CURRENT_PAGE":
            return {
                ...state,
                currentPage: action.currentPage
            };
        case "SET_USERS":
            return {
                ...state,
                users: action.users
            };
        case "SET_TOTAL_USERS":
            return {
                ...state,
                totalUsersCount: action.totalCount
            };
        case "TOGGLE_IS_FETCHING":
            return {
                ...state,
                isFetching: action.isFetching
            };
        case "FOLLOFING_IN_PROGRESS":
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userID]
                    : state.followingInProgress.filter(id => id !== action.userID)
            };
        default:
            return state
    }
};

type ThunkType = BaseThunkType<ActionsTypes>

type DispatchType = Dispatch<ActionsTypes>

export const requestUsers = (currentPage: number, pageSize: number):ThunkType =>
    async (dispatch) => {
    dispatch(actions.toggleFetching(true))
    const response = await userAPI.getUsers(currentPage, pageSize)
    dispatch(actions.setTotalUsersCount(response.totalCount))
    dispatch(actions.setUsers(response.items))
    dispatch(actions.toggleFetching(false))
}

type dispatchMethodType = (userID:number)=> ActionsTypes
export const _followUnfollowFlow = (userID: number, dispatchMethod: dispatchMethodType, response: any, dispatch: DispatchType) => {
    dispatch(actions.toggleFollowingProgress(true, userID))
    if (response.resultCode === ResponseResultCode.Success) {
        dispatch(dispatchMethod(userID))
    }
    dispatch(actions.toggleFollowingProgress(false, userID))
}

export const follow = (userID: number):ThunkType => async (dispatch) => {
    const response = await userAPI.followAPI(userID)
    _followUnfollowFlow(userID, actions.followSuccess, response, dispatch)
}
export const unfollow = (userID: number): ThunkType => async (dispatch) => {
    const response = await userAPI.unfollowAPI(userID)
    _followUnfollowFlow(userID, actions.unfollowSuccess, response, dispatch)

}

export default usersReducer;