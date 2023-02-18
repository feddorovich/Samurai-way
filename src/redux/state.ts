import {rerenderEntireTree} from "../render";

export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    sidebar: SidebarType
}
export type ProfilePageType ={
    posts: PostType[]
}
export type PostType = {
    id: number, message: string, likesCount: number
}
export type DialogsPageType = {
    messages: MessagesType[]
    dialogs: DialogType[]
}
export type MessagesType = {
    id: number, message: string
}
export type DialogType = {
    id: number, name: string
}
export type SidebarType = {}

let state: RootStateType = {
    profilePage: {
        posts: [
            {id: 1, message: 'Hi, how are you', likesCount: 12},
            {id: 2, message: 'It\'s my first post', likesCount: 10},
            {id: 3, message: 'Blabla', likesCount: 10},
            {id: 4, message: 'Dada', likesCount: 10},
        ]
    },
    dialogsPage: {
        messages: [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'How are you?'},
            {id: 3, message: 'Good'},
            {id: 4, message: 'Yo'},
            {id: 5, message: 'YoYo'}
        ],
        dialogs: [
            {id: 1, name: 'Dimych'},
            {id: 2, name: 'Andrey'},
            {id: 3, name: 'Sveta'},
            {id: 4, name: 'Sasha'},
            {id: 5, name: 'Viltor'},
            {id: 6, name: 'Valera'}
        ]
    },
    sidebar: {}
}

export const addPost = (postMessage: string) => {
    const newPost: PostType = {id: 5, message:postMessage, likesCount:0}
    state.profilePage.posts.push(newPost)
    rerenderEntireTree(state)
}

export default state