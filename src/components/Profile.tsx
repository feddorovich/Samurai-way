import React from 'react';
import s from './Profile.module.css'

function Profile() {
    return (
        <div className={s.content}>
            <div>
                <img src="https://sletaem.kz/upload/iblock/bb9/bb92209a394938a93de111fcf86de120.jpg" alt=""/>
            </div>
            <div>
                ava + desctiption
            </div>
            <div className={s.posts}>
                <div className={s.item}>
                    My posts
                </div>
                <div>
                    New post
                </div>
                <div>
                    Post 1
                </div>
                <div>
                    Post 2
                </div>
            </div>
        </div>
    )
}

export default Profile;