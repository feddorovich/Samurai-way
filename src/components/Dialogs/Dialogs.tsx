import React from 'react';
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {DialogsPageType} from "../../redux/state";

type DialogsPropsType = {
    state: DialogsPageType
}

const Dialogs: React.FC<DialogsPropsType> = (props) => {

    let dialogsElements = props.state.dialogs.map((d) => <DialogItem name={d.name} id={d.id}/>)
    let messagesElements = props.state.messages.map((m) => <Message message={m.message} id={m.id}/>)

    const newMessageElement = React.createRef<HTMLTextAreaElement>()
    const addMessage = () => {
      alert(newMessageElement.current?.value)
    }

    return (
        <div>
            <div className={s.dialogs}>
                <div className={s.dialogsItems}>
                    {dialogsElements}
                </div>
                <div className={s.messages}>
                    {messagesElements}
                    <br/>
                    <textarea ref={newMessageElement}></textarea>
                    <button onClick={addMessage}>Add</button>
                </div>
            </div>
        </div>
    );
};

export default Dialogs;