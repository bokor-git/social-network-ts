import React from "react";
import {myCreateField} from "../../common/FormsControls/FormsControls";
import {InjectedFormProps, reduxForm} from "redux-form";
import style from "../../common/FormsControls/FormsControls.module.css";
import {ProfileDataType} from "../../../types/types";

type OwnPropsType = {
    profileData:  ProfileDataType
}


type PostFormTypeKeyType = Extract<keyof ProfileDataType, string>
const ProfileDataForm:React.FC<InjectedFormProps<ProfileDataType,OwnPropsType>&OwnPropsType> = ({handleSubmit, profileData, error}) => {
    return <form>
        {error && <div className={style.summaryError}>
            {error}
        </div>
        }
        <button onClick={handleSubmit}>Save</button>
        <div><b>Full nave</b>: {myCreateField<PostFormTypeKeyType>("Full Name", "fullName", [], "input")} </div>
        <div><b>Looking for a job</b>: {myCreateField<PostFormTypeKeyType>("", "lookingForAJob", [], "Input", {type: "checkbox"})} </div>
        <div><b>My skills</b>: {myCreateField<PostFormTypeKeyType>("My skills", "lookingForAJobDescription", [], "textarea",)} </div>
        <div><b>About me</b>: {myCreateField<PostFormTypeKeyType>("About me", "aboutMe", [], "textarea")} </div>
        <div><b>Contacts:</b>{Object.keys(profileData.contacts).map((key) => {
            return <div>
                <b> {key} :</b> {myCreateField(key, "contacts." + key, [], "input")}
            </div>

        })}
        </div>
    </form>
};

export const ProfileDataFormRedux = reduxForm<ProfileDataType, OwnPropsType>({
    form: 'edit-profile'
})(ProfileDataForm);
