import {sendMassageCreator} from "../../Redux/dialog-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import React from "react";
import withAuthRedirect from "../../hoc/AuthRedirect";
import {compose} from "redux";
import {AppStateType} from "../../Redux/redux-store";

export type MassageDataType = Array<{id: number, text: string}>

export type DialogsPropsType = {
    dialogsData: Array<{id:number; name: string}>
    massageData: MassageDataType
    sendMassageCreator: (massage:string)=>void
}


class DialogsContainerAPI extends React.Component<DialogsPropsType> {
    render() {
        return <Dialogs {...this.props}/>
    }
}

let mapStateToProps = (state:AppStateType) => {
    return {
        dialogsData: state.dialogPage.dialogsData,
        massageData: state.dialogPage.massageData,

    }

};


export default compose(
    connect(mapStateToProps, {sendMassageCreator}),
    withAuthRedirect
)
(DialogsContainerAPI)

