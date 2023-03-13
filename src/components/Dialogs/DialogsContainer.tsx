import React from 'react';
import {ActionsTypes, DialogsPageType,} from "../../redux/store";
import {sendMessageActionCreator, updateNewMessageBodyActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";

type DialogsPropsType = {
    state: DialogsPageType
    dispatch: (action: ActionsTypes) => void
}

const DialogsContainer: React.FC<DialogsPropsType> = (props) => {

    const onSendMessageClick = () => {
        props.dispatch(sendMessageActionCreator(props.state.newMessageBody))
    }
    const onNewMessageChange = (text: string) => {
        if (text) {
            props.dispatch(updateNewMessageBodyActionCreator(text))
        }
    }

    return (
       <Dialogs updateNewMessageBody={onNewMessageChange} SendMessage={onSendMessageClick} state={props.state}/>
    );
};

export default DialogsContainer;