import React from 'react';
import {NavLink} from "react-router-dom";
import s from "./Users.module.css";
import {UserType} from "../../types/types";


type UserPropsType = {
    follow: (id:number) => void
    unfollow:(id:number) => void
    followingInProgress:Array<number>
        user: UserType
}

const User = ({follow, unfollow, followingInProgress, user}:UserPropsType) => {
    return <div className={s.users}>
                        <span>
                            <NavLink exact to={"/Profile/" + user.id}>
                            <div><img
                                src={user.photos.small != null ? user.photos.small : "https://www.shareicon.net/data/512x512/2016/07/21/799325_user_512x512.png"}
                                alt="No Avatar"/></div>
                                      </NavLink><div>
                                {user.followed ?
                                    <button disabled={followingInProgress.some((id:number) => id === user.id)}
                                            onClick={() => {
                                                unfollow(user.id)
                                            }}>Unfollow</button> :
                                    <button disabled={followingInProgress.some((id:number) => id === user.id)}
                                            onClick={() => {
                                                follow(user.id)
                                            }}>Follow</button>}
                            <button>Like</button>
                            </div>
                        </span>

        <div>{user.name}</div>
        <div>{user.status}</div>
        <div> {user.id}</div>

    </div>
}

export default User;