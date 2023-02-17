import React from 'react';
import s from './../Dialogs.module.css'
import {MessagesPropsType} from "../../../redux/state";

const Message = (props: MessagesPropsType) => {
    return (
        <div className={s.dialog}>{props.message}</div>
    )
}

export default Message;