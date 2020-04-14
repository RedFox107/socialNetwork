import React,{useState} from 'react';
import {Field,reduxForm} from 'redux-form';
import {FormControlCreator} from "../../common/FormsControls/formsControls";
const input = FormControlCreator('input')
const textarea = FormControlCreator('textarea')
const ProfileDataForm = ({handleSubmit,error,...props})=>{
    return <form onSubmit={handleSubmit}>
         <div>
            <button onClick={()=>{}}>Save</button>
        </div>
        <div>
            <b>Full name</b>:<Field type={'text'} component={input} placeholder={'Your full name'} validate={[]} name={"fullName"}/>
        </div>
        <div>
            <b>Looking for a job:</b><Field type={'checkbox'} component={input} validate={[]} name={"lookingForAJob"}/>
        </div>
        <div>
            <b>My professional skills</b>
            <Field component={textarea} validate={[]} name={"lookingForAJobDescription"} placeholder={"My professionals skills..."}/>
        </div>
        <div>
            <b>AboutMe:</b>
            <Field component={textarea} validate={[]} name={"aboutMe"} placeholder={"About me"}/>
        </div>
        <div>
            <b>Contacts</b>{Object.entries(props.initialValues.contacts).map(([key,value])=>{
                return <div>
                    <b>{key}</b>: <Field component={input} placeholder={value} name={`contacts.${key}`}/>
                </div>
        })}
        </div>
        {error &&<div>
            {error}
        </div>}
    </form>
}



const ProfileDataReduxFrom = reduxForm({
    form: "editProfile"
})(ProfileDataForm)


export default ProfileDataReduxFrom
