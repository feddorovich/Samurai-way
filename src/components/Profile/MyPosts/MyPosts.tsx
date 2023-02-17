import React from 'react';
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import {PropsPostType} from "../../../redux/state";

type MyPostsProrpsType = {
    posts: PropsPostType[]
}

function MyPosts(props: MyPostsProrpsType) {

    let postsElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>)

    return (
        <div className={s.postsBlock}>
            <div>
                <h3>My posts</h3>
            </div>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button onClick={() => {alert('alert')} }>Add post</button>
                </div>
            </div>
            <div>
                New post
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;