import React from 'react';
import {ActionsTypes,  PostType} from "../../../redux/store";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";

type MyPostsProrpsType = {
    posts: PostType[]
    newPostText: string
    dispatch: (action: ActionsTypes) => void
}

const MyPostsContainer: React.FC<MyPostsProrpsType> = (props) => {

    const addPost = () => {
        props.dispatch(addPostActionCreator(props.newPostText))
/*        props.addPost(props.newPostText)*/
    }

    const onPostChange = (text: string) => {
        if (text) {
            props.dispatch(updateNewPostTextActionCreator(text))
/*            props.updateNewPostText(text)*/
        }
    }

    return (
        <MyPosts updateNewPostText={onPostChange}
                 addPost={addPost}
                 posts={props.posts}
                 newPostText={props.newPostText}/>
    )
}

export default MyPostsContainer;