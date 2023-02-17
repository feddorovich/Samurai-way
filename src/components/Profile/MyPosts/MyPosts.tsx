import React from 'react';
import s from './MyPosts.module.css'
import Post from "./Post/Post";

function MyPosts(props: any) {

    let postsElements = props.posts.map((p: { message: any; likesCount: any; }) => <Post message={p.message} likesCount={p.likesCount}/>)

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