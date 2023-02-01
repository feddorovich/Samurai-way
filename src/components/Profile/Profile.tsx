import React from 'react';
import s from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";

function Profile() {
    return (
        <div className={s.content}>
            <div>
                <img src="https://sletaem.kz/upload/iblock/bb9/bb92209a394938a93de111fcf86de120.jpg" alt=""/>
            </div>
            <div>
                ava + desctiption
            </div>
            <MyPosts/>
        </div>
    )
}

export default Profile;