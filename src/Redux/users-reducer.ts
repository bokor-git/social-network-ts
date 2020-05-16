import {ResponseResultCode, userAPI} from "../api/api";
import {UserType} from  "../types/types"
import {ThunkAction} from "redux-thunk";
import {AppStateType} from "./redux-store";
import {Dispatch} from "redux";

const FOLLOW = "users/FOLLOW";
const UNFOLLOW = "users/UNFOLLOW";
const SET_USERS = "users/SET_USERS";
const SET_CURRENT_PAGE = "users/SET_CURRENT_PAGE";
const SET_TOTAL_USERS = "users/SET_TOTAL_USERS";
const TOGGLE_IS_FETCHING = "users/TOGGLE_IS_FETCHING";
const FOLLOFING_IN_PROGRESS = "users/FOLLOFING_IN_PROGRESS";


type FollowSuccessActionType = {
    type: typeof FOLLOW
    userID: number
}
export const followSuccess = (userID: number): FollowSuccessActionType => {
    return {type: FOLLOW, userID}
};

type UnfollowSuccessActionType ={
    type: typeof UNFOLLOW
    userID:number
}
export const unfollowSuccess = (userID: number): UnfollowSuccessActionType => {
    return {type: UNFOLLOW, userID}
};

type SetUsersActionType = {
    type: typeof SET_USERS
    users: Array<UserType>
}
export const setUsers = (users: Array<UserType>): SetUsersActionType => {
    return {type: SET_USERS, users}
};

type SetCurrentPageActionType ={
    type: typeof SET_CURRENT_PAGE
    currentPage: number
}
export const setCurrentPage = (currentPage: number): SetCurrentPageActionType => {
    return {type: SET_CURRENT_PAGE, currentPage}
};

type SetTotalUsersCountActionType = {
    type: typeof SET_TOTAL_USERS
    totalCount:number
}
export const setTotalUsersCount = (totalCount: number): SetTotalUsersCountActionType => {
    return {type: SET_TOTAL_USERS, totalCount: totalCount}
};

type ToggleFetchingActionType = {
    type: typeof TOGGLE_IS_FETCHING
    isFetching: boolean
}
export const toggleFetching = (isFetching: boolean): ToggleFetchingActionType => {
    return {type: TOGGLE_IS_FETCHING, isFetching}
};

type ToggleFollowingProgressActionType = {
    type: typeof FOLLOFING_IN_PROGRESS
    isFetching: boolean
    userID: number
}
export const toggleFollowingProgress = (isFetching: boolean, userID: number): ToggleFollowingProgressActionType => {
    return {type: FOLLOFING_IN_PROGRESS, isFetching, userID}
};


type ActionTypes = FollowSuccessActionType | UnfollowSuccessActionType | SetUsersActionType | SetCurrentPageActionType
    | SetTotalUsersCountActionType | ToggleFetchingActionType | ToggleFollowingProgressActionType

let initialState = {
    users: [] as Array<UserType>,
    pageSize: 7,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: [] as Array<number>
};

export type InitialStateType = typeof initialState
const usersReducer = (state = initialState, action: ActionTypes): InitialStateType => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userID) {
                        return {...u, followed: true}
                    }
                    return u
                }),
            };
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userID) {
                        return {...u, followed: false}
                    }
                    return u
                }),
            };
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage
            };
        case SET_USERS:
            return {
                ...state,
                users: action.users
            };
        case SET_TOTAL_USERS:
            return {
                ...state,
                totalUsersCount: action.totalCount
            };
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            };
        case FOLLOFING_IN_PROGRESS:
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

type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionTypes>

type DispatchType = Dispatch<ActionTypes>

export const requestUsers = (currentPage: number, pageSize: number):ThunkType =>
    async (dispatch) => {
    dispatch(toggleFetching(true))
    const response = await userAPI.getUsers(currentPage, pageSize)
    dispatch(setTotalUsersCount(response.totalCount))
    dispatch(setUsers(response.items))
    dispatch(toggleFetching(false))
}

type dispatchMethodType = (userID:number)=>FollowSuccessActionType|UnfollowSuccessActionType
export const _followUnfollowFlow = (userID: number, dispatchMethod: dispatchMethodType, response: any, dispatch: DispatchType) => {
    dispatch(toggleFollowingProgress(true, userID))
    if (response.resultCode === ResponseResultCode.Success) {
        dispatch(dispatchMethod(userID))
    }
    dispatch(toggleFollowingProgress(false, userID))
}

export const follow = (userID: number):ThunkType => async (dispatch) => {
    const response = await userAPI.followAPI(userID)
    _followUnfollowFlow(userID, followSuccess, response, dispatch)
}
export const unfollow = (userID: number): ThunkType => async (dispatch) => {
    const response = await userAPI.unfollowAPI(userID)
    _followUnfollowFlow(userID, unfollowSuccess, response, dispatch)

}

export default usersReducer;