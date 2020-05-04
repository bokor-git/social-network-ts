import {sendMassageCreator} from "../../Redux/dialog-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import React from "react";
import withAuthRedirect from "../../hoc/AuthRedirect";
import {compose} from "redux";


class DialogsContainerAPI extends React.Component {
    render() {
        return <Dialogs {...this.props}/>
    }
};

let mapStateToProps = (state) => {
    return {
        dialogsData: state.dialogPage.dialogsData,
        massageData: state.dialogPage.massageData,

    }

};

let mapDispatchToProps = (dispatch) => {
    return {
        onSendMassageButtonClick: (massage) => {
            dispatch(sendMassageCreator(massage))
        }
    }
};

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)
(DialogsContainerAPI)

