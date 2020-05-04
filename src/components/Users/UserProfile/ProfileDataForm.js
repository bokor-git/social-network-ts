import React from "react";
import {myCreateField} from "../../common/FormsControls/FormsControls";
import {reduxForm} from "redux-form";
import style from "../../common/FormsControls/FormsControls.module.css";

const ProfileDataForm = ({handleSubmit, profileData, error}) => {
    return <form>
        {error && <div className={style.summaryError}>
            {error}
        </div>
        }
        <button onClick={handleSubmit}>Save</button>
        <div><b>Full nave</b>: {myCreateField("Full Name", "fullName", [], "input")} </div>
        <div><b>Looking for a job</b>: {myCreateField("", "lookingForAJob", [], "Input", {type: "checkbox"})} </div>
        <div><b>My skills</b>: {myCreateField("My skills", "lookingForAJobDescription", [], "textarea",)} </div>
        <div><b>About me</b>: {myCreateField("About me", "aboutMe", [], "textarea")} </div>
        <div><b>Contacts:</b>{Object.keys(profileData.contacts).map(key => {
            return <div>
                <b> {key} :</b> {myCreateField(key, "contacts." + key, [], "input")}
            </div>

        })}
        </div>
    </form>
};

export const ProfileDataFormRedux = reduxForm({
    form: 'edit-profile'
})(ProfileDataForm);
