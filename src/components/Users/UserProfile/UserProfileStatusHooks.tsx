import React, {ChangeEvent, useEffect, useState} from 'react';

type UserProfileStatusHooksPropsType = {
    status: " " | string
    updateProfileStatus: (status: string) => void
    getProfileStatus: (userId: number | null) => void
}

const UserProfileStatusHooks = (props:UserProfileStatusHooksPropsType) => {
    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);
    useEffect(()=>{
        setStatus(props.status)},[props.status]);
    let activateEditMode =()=>{
        setEditMode(true)
    }
    let deactivatedEditNode= ()=> {
        setEditMode(false)
        props.updateProfileStatus(status);
    }
    let onStatusChange=(e:ChangeEvent<HTMLInputElement>)=>{
        setStatus(e.currentTarget.value)
    };

    return <div>
        {!editMode &&
        <div><span onDoubleClick={activateEditMode}>{props.status || "no status"}</span></div>}
        {editMode &&
        <div><input autoFocus={true} onChange={onStatusChange} onBlur={deactivatedEditNode}
                value={status}/></div>}
    </div>
}


export default UserProfileStatusHooks