import React from 'react';
import s from './Post.module.css'
import {PostType} from "../../../../redux/state";

const Post: React.FC<PostType> = (props) => {
    return (
        <div>
            <div className={s.item}>
                <div>
                    <img
                        src="https://global-uploads.webflow.com/5e157547d6f791d34ea4e2bf/6087f2b060c7a92408bac811_logo.svg"
                        alt=""/>
                    {props.message}
                    <div>
                        <span>{props.likesCount}</span>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Post;