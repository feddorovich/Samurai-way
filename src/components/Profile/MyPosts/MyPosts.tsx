import React from 'react';
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import {PostType} from "../../../redux/state";

type MyPostsProrpsType = {
    posts: PostType[]
    addPost: (postMessage: string) => void
}

const MyPosts: React.FC<MyPostsProrpsType> = (props) => {

    const postsElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>)
    const newPostElement = React.createRef<HTMLTextAreaElement>()
    const addPost = () => {
        // let text = newPostElement.current ? newPostElement.current.value : 'Empty'
        let text = newPostElement.current?.value
        if (text === undefined) {
            return 'Enter text please'
        }
        props.addPost(text)
        newPostElement.current!.value = ''
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <textarea ref={newPostElement}></textarea>
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