import React from 'react';
import {connect} from "react-redux";
import {
    follow,
    actions,
    unfollow,
    requestUsers
}
    from "../../Redux/users-reducer";
import Users from "./Users";
import {compose} from "redux";
import Loading from "../common/Conponents/Loading";
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount,
    getUsersSuper
} from "../../Redux/users-selectors";
import UserPagesCount from "./Pagenation";
import {UserType} from "../../types/types";
import {AppStateType} from "../../Redux/redux-store";


type MapStateToPropsType = {
    users: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: Array<number>
}
type MapDispatchToPropsType = {
    follow: (userID: number) => void
    unfollow: (userID: number) => void
    getUsersThunkCreator: (currentPage: number, pageSize: number) => void
    setCurrentPage: (p: number) => void
    toggleFollowingProgress: (isFetching: boolean, userID: number) => void


}


type PropsType = MapStateToPropsType & MapDispatchToPropsType

class UsersAPIComponent extends React.Component<PropsType> {
    componentDidMount() {
        this.props.getUsersThunkCreator(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (p: number) => {
        this.props.getUsersThunkCreator(p, this.props.pageSize)
        this.props.setCurrentPage(p);
    };


    render() {
        if (this.props.isFetching)
            return <Loading/>;
        return (
            <div>
                <UserPagesCount currentPage={this.props.currentPage}
                                onPageChanged={this.onPageChanged}
                                totalUsersCount={this.props.totalUsersCount}
                                pageSize={this.props.pageSize}
                                portionSize={10}/>
                <Users
                    users={this.props.users}
                    follow={this.props.follow}
                    unfollow={this.props.unfollow}
                    followingInProgress={this.props.followingInProgress}/>
            </div>
        )
    }

}

let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        users: getUsersSuper(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state),

    }
}

export default compose(
    //<TStateProps = {}, TDispatchProps = {}, TOwnProps = {}, State = DefaultRootState>
    connect<MapStateToPropsType, MapDispatchToPropsType, {}, AppStateType>
    (mapStateToProps, {
        follow,
        unfollow,
        setCurrentPage:actions.setCurrentPage,
        toggleFollowingProgress:actions.toggleFollowingProgress,
        getUsersThunkCreator: requestUsers
    }),
)(UsersAPIComponent)


