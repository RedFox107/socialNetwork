import React from 'react';
import s from './Dialogs.module.css';//styles
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {Redirect} from 'react-router-dom';
import {reduxForm, Field} from 'redux-form';
import {maxLenghtCreator, required} from "../../utils/Validators/validators";
import {FormControlCreator} from "../common/FormsControls/formsControls";
const maxLenght = maxLenghtCreator(20)
const AddMessageForm = (props) => {

    return (<form onSubmit={props.handleSubmit}>
        <div>
            <Field component={FormControlCreator('textarea')} name={"newMessageBody"} placeholder="Enter new message" validate={[required,maxLenght]}/>
        </div>
        <div>
            <button>Send</button>
        </div>
    </form>)
}

const AddMessageReduxForm = reduxForm({form: "dialogAddMessageForm"})(AddMessageForm);

const Dialogs = (props) => {

    const dialogsElements = props.state.dialogs.map((d) => (
            <DialogItem name={d.name} key={d.id} id={d.id} img={d.img}/>)),
        messagesElements = props.state.messages.map((m) => <Message message={m.message} key={m.id} id={m.id}/>);
    if (!props.isAuth) {
        return <Redirect to={'/login'}/>
    }
    const addNewMessage = (values) => {
        props.sendMessageCont(values.newMessageBody);
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
                <AddMessageReduxForm onSubmit={addNewMessage} />
            </div>
        </div>
    );
}


export default Dialogs;