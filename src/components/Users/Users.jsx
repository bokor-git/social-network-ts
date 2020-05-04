import React from 'react';
import s from "./Users.module.css";
import User from "./User";


const Users = ({users,follow, unfollow, followingInProgress}) => {
    return <div>
        <h1>USER LIST</h1>
        {users.map(u => <User key={u.id}
                                 className={s.users}
                                 user={u}
                                 followingInProgress={followingInProgress}
                                 unfollow={unfollow}
                                 follow={follow}/>)
        }
    </div>
}


export default Users;