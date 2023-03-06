import React, {ChangeEvent} from 'react';
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import {ActionsTypes, PostType} from "../../../redux/state";

type MyPostsProrpsType = {
    posts: PostType[]
    newPostText: string
    dispatch: (action: ActionsTypes) => void

}

const MyPosts: React.FC<MyPostsProrpsType> = (props) => {

    const postsElements = props.posts.map(p => <Post key={p.id}
                                                     id={p.id}
                                                     message={p.message}
                                                     likesCount={p.likesCount}
    />)

    const addPost = () => {
        props.dispatch({type: "ADD-POST", postMessage: props.newPostText})
/*        props.addPost(props.newPostText)*/
    }

    const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let text = e.currentTarget.value
        if (text) {
            props.dispatch({type: "UPDATE-NEW-POST-TEXT", newText: text})
/*            props.updateNewPostText(text)*/
        }
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <textarea onChange={onPostChange} value={props.newPostText}/>
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