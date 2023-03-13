import React, {ChangeEvent} from 'react';
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import {PostType} from "../../../redux/store";

type MyPostsProrpsType = {
    updateNewPostText: (text: string) => void
    addPost: () => void
    posts: PostType[]
    newPostText: string
}

const MyPosts: React.FC<MyPostsProrpsType> = (props) => {

    const postsElements = props.posts.map(p => <Post key={p.id}
                                                     id={p.id}
                                                     message={p.message}
                                                     likesCount={p.likesCount}
    />)

    const onAddPost = () => {
/*        props.dispatch(addPostActionCreator(props.newPostText))*/
        props.addPost()
    }

    const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let text = e.currentTarget.value
        if (text) {
/*            props.dispatch(updateNewPostTextActionCreator(text))*/
            props.updateNewPostText(text)
        }
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <textarea onChange={onPostChange} value={props.newPostText}/>
                <button onClick={onAddPost}>Add post</button>
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