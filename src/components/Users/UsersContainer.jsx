import React from 'react';
import {connect} from "react-redux";
import {
    follow,
    setCurrentPage,
    unfollow,
    toggleFollowingProgress,
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


class UsersAPIComponent extends React.Component {
    componentDidMount() {
        this.props.getUsersThunkCreator(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (p) => {
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

let mapStateToProps = (state) => {
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
    connect(mapStateToProps, {
        follow,
        unfollow,
        setCurrentPage,
        toggleFollowingProgress,
        getUsersThunkCreator: requestUsers
    }),
)(UsersAPIComponent)


