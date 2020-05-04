import React from 'react';
import s from "./UserProfile.module.css"


class UserProfileStatus extends React.Component {
    state = {
        editMode: false,
        status: this.props.status
    }

    activatedEditNode = ()=> {
        this.setState({
            editMode: true
        });
    }
    deactivatedEditNode= ()=> {
        this.setState({
            editMode: false
        });
        this.props.updateProfileStatus(this.state.status);
    }
    onStatusChange=(e)=>{
        this.setState({
        status: e.currentTarget.value})
    };
componentDidUpdate(prevProps, prevState, snapshot) {
   if(prevProps.status!==this.props.status)
        this.setState({
            status: this.props.status
        })
}

    render() {
        return <div>
            {!this.state.editMode &&
            <div><span onDoubleClick={this.activatedEditNode}>
                {this.props.status || "no status"}</span></div>
            }
            {this.state.editMode &&
            <div><input onChange={this.onStatusChange} onBlur={this.deactivatedEditNode} value={this.state.status} autoFocus={true} /></div>
            }
        </div>
    }
}

export default UserProfileStatus