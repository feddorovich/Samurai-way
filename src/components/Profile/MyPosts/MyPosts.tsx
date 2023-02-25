import React from 'react';
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import {PostType} from "../../../redux/state";

type MyPostsProrpsType = {
    posts: PostType[]
    addPost: (postMessage: string) => void
    newPostText: string
    updateNewPostText: (newText: string) => void
}

const MyPosts: React.FC<MyPostsProrpsType> = (props) => {

    const postsElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>)
    const newPostElement = React.createRef<HTMLTextAreaElement>()
    const addPost = () => {
        // let text = newPostElement.current ? newPostElement.current.value : 'Empty'
        let text = newPostElement.current?.value
        if (text) {
            props.addPost(text)
        }
    }

    const onPostChange = () => {
        let text = newPostElement.current?.value
        if (text) {
            props.updateNewPostText(text)
        }
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <textarea ref={newPostElement} onChange={onPostChange} value={props.newPostText}/>
                <button onClick={addPost}>Add post</button>
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