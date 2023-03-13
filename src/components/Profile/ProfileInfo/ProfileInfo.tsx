import React from 'react';
import s from './ProfileInfo.module.css'

function ProfileInfo() {
    return (
        <div>
            <div className={s.profileImg}>
                <img src="https://cdn.7days.ru/pic/309/949034/1248694/86.jpg" alt="sea"/>
            </div>
            <div className={s.descriptionBlock}>
                ava + desctiption
            </div>
        </div>
    )
}

export default ProfileInfo;