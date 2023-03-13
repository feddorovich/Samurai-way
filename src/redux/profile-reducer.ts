import {PostType, ProfilePageType} from "./store";

export type ProfileReducerType = AddPostActionType | UpdateNewPostTextActionType
type AddPostActionType = ReturnType<typeof addPostActionCreator>
type UpdateNewPostTextActionType = ReturnType<typeof updateNewPostTextActionCreator>

export const addPostActionCreator = (postMessage: string) => {
    return {
        type: "ADD-POST",
        postMessage: postMessage
    } as const
}
export const updateNewPostTextActionCreator = (newText: string) => {
    return {
        type: "UPDATE-NEW-POST-TEXT",
        newText: newText
    } as const
}

const profileReducer = (state: ProfilePageType, action: ProfileReducerType) => {
    switch (action.type) {
        case 'ADD-POST':
            const newPost: PostType = {
                id: new Date().getTime(),
                message: action.postMessage,
                likesCount: 0
            }
            state.posts.push(newPost)
            state.newPostText = ''
            break;
        case 'UPDATE-NEW-POST-TEXT':
            state.newPostText = action.newText
            break;
        default:
            return state
    }
    return state
}

export default profileReducer