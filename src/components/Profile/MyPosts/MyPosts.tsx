import React from 'react';
import s from './MyPosts.module.css'
import Post from "./Post/Post";

function MyPosts() {
    return (
        <div>
            <div>
                My posts
            </div>
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <div>
                New post
            </div>
            <div className={s.posts}>
                <Post message={'Hi, how are you'} likes={5}/>
                <Post message={`It's my first post`} likes={10}/>
            </div>
        </div>
    )
}

export default MyPosts;