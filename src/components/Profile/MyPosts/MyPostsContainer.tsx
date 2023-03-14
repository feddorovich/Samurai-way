import React from 'react';
import {ActionsTypes, PostType} from "../../../redux/store";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import StoreContext from "../../../StoreContext";

type MyPostsProrpsType = {
    // posts: PostType[]
    // newPostText: string
    // dispatch: (action: ActionsTypes) => void
}

const MyPostsContainer: React.FC<MyPostsProrpsType> = (props) => {

    return (
        <>
           <StoreContext.Consumer >
               {
                   (store: any) => {

                       const state = store.getState();

                       const addPost = () => {
                          store.dispatch(addPostActionCreator(state.profilePage.newPostText))
                           /*        props.addPost(props.newPostText)*/
                       }

                       const onPostChange = (text: string) => {
                           if (text) {
                               store.dispatch(updateNewPostTextActionCreator(text))
                               /*            props.updateNewPostText(text)*/
                           }
                       }

                   return (
                       <MyPosts updateNewPostText={onPostChange}
                                addPost={addPost}
                                posts={state.profilePage.posts}
                                newPostText={state.profilePage.newPostText}/>
                       )

                   }
               }
            </StoreContext.Consumer>
        </>
    )
}

export default MyPostsContainer;