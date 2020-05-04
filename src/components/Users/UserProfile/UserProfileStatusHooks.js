import React, {useEffect, useState} from 'react';



const UserProfileStatusHooks = (props) => {
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
    let onStatusChange=(e)=>{
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