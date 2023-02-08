import React from 'react';
import s from './ProfileInfo.module.css'

function ProfileInfo() {
    return (
        <div>
            <div>
                <img src="https://sletaem.kz/upload/iblock/bb9/bb92209a394938a93de111fcf86de120.jpg" alt=""/>
            </div>
            <div className={s.descriptionBlock}>
                ava + desctiption
            </div>
        </div>
    )
}

export default ProfileInfo;