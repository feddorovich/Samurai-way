import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

const DialogItem = (props: any) => {
    let path = '/dialogs/' + props.id
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props: any) => {
    return (
        <div className={s.dialog}>{props.message}</div>
    )
}

const Dialogs = () => {

    let dialogData = [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Andrey'},
        {id: 3, name: 'Sveta'},
        {id: 4, name: 'Sasha'},
        {id: 5, name: 'Viltor'},
        {id: 6, name: 'Valera'}
    ]
    let messagesData = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How are you?'},
        {id: 3, message: 'Good'},
        {id: 4, message: 'Yo'},
        {id: 5, message: 'YoYo'}
    ]

    return (
        <div>
            <div className={s.dialogs}>
                <div className={s.dialogsItems}>

                    <DialogItem name={dialogData[0].name} id={dialogData[0].id}/>
                    <DialogItem name={dialogData[1].name} id={dialogData[1].id}/>


                </div>
                <div className={s.messages}>

                    <Message message={messagesData[0].message}/>
                    <Message message={messagesData[1].message}/>

                </div>
            </div>
        </div>
    );
};

export default Dialogs;