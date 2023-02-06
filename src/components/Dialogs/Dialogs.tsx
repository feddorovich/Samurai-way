import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

const Dialogs = () => {
    return (
        <div>
            <div className={s.dialogs}>
                <div className={s.dialogsItems}>
                    <div className={s.dialog + ' ' + s.active}>
                        <NavLink to={'/dialogs/1'}>Dimych</NavLink>
                    </div>
                    <div className={s.dialog}>
                        <NavLink to={'/dialogs/2'}>Andrey</NavLink>
                    </div>
                    <div className={s.dialog}>
                        <NavLink to={'/dialogs/3'}>Dimych</NavLink>
                    </div>
                    <div className={s.dialog}>
                        <NavLink to={'/dialogs/4'}>Sveta</NavLink>
                    </div>
                    <div className={s.dialog}>
                        <NavLink to={'/dialogs/5'}>Sasha</NavLink>
                    </div>
                    <div className={s.dialog}>
                        <NavLink to={'/dialogs/6'}>Valera</NavLink>
                    </div>
                </div>
                <div className={s.messages}>
                    <div className={s.dialog}>Hi</div>
                    <div className={s.dialog}>How are you?</div>
                    <div className={s.dialog}>Yo</div>
                </div>
            </div>
        </div>
    );
};

export default Dialogs;