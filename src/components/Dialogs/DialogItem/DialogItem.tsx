import React from 'react';
import s from './../Dialogs.module.css'
import {NavLink} from "react-router-dom";
import {DialogPropsType} from "../../../redux/state";

const DialogItem = (props: DialogPropsType) => {
    let path = '/dialogs/' + props.id
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

export default DialogItem;