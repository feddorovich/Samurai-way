import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {
    ActionsTypes,
    DialogsPageType,
    sendMessageActionCreator,
    updateNewMessageBodyActionCreator
} from "../../redux/state";

type DialogsPropsType = {
    state: DialogsPageType
    dispatch: (action: ActionsTypes) => void
}

const Dialogs: React.FC<DialogsPropsType> = (props) => {

    const dialogsElements = props.state.dialogs.map((d) => <DialogItem key={d.id} id={d.id} name={d.name} />)
    const messagesElements = props.state.messages.map((m) => <Message key={m.id} id={m.id} message={m.message}/>)

    const addMessage = () => {
        props.dispatch(sendMessageActionCreator(props.state.newMessageBody))
    }

    const onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let text = e.currentTarget.value
        if (text) {
            props.dispatch(updateNewMessageBodyActionCreator(text))
        }
    }

    return (
        <div>
            <div className={s.dialogs}>
                <div className={s.dialogsItems}>
                    {dialogsElements}
                </div>
                <div className={s.messages}>
                    <div>{messagesElements}</div>
                    <div>
                        <textarea value={props.state.newMessageBody}
                                  onChange={onNewMessageChange}
                                  placeholder={'Enter your message'}></textarea>
                        <button onClick={addMessage}>Send</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dialogs;