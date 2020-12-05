import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, requiredField} from "../../utils/validators/validators";
import {Textarea} from "../common/FormControls/FormControls";
const maxLength20 = maxLengthCreator(20)
const MessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea} name={'messageText'} validate={[requiredField, maxLength20]}/>
            </div>
            <div>
                <button>Add message</button>
            </div>
        </form>
    )
}
const MessageReduxForm = reduxForm({
    form: "message"
})(MessageForm)
const Dialogs = (props) => {
    const onSubmit=(formData)=>{
        props.addDialog(formData.messageText);
    }
    let dialogElements = props.state.dialogs.map((d) => <DialogItem name={d.name} id={d.id} key={d.id} ava={d.ava}/>)
    let messageElements = props.state.messages.map((m) => <Message message={m.message} key={m.id}/>)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogElements}
            </div>
            <div className={s.messages}>
                {messageElements}
                < MessageReduxForm onSubmit={onSubmit}/>
            </div>
        </div>
    )
}

export default Dialogs;