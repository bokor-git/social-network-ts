import React from 'react';
import s from "./Users.module.css";
import User from "./User";
import {UserType} from "../../types/types";


type PropsType= {
    users: Array<UserType>
    follow:(userID: number)=>void
    unfollow:(userID: number)=>void
    followingInProgress:Array<number>
}


function Users(props: PropsType) {
    let {users, follow, unfollow, followingInProgress} = props;
    return <div className={s.users}>
        <h1>USER LIST</h1>
        {users.map(u => <User key={u.id}
                              user={u}
                              followingInProgress={followingInProgress}
                              unfollow={unfollow}
                              follow={follow}/>)
        }
    </div>
}


export default Users;