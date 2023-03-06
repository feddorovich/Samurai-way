import profileReducer, {addPostActionCreator, updateNewPostTextActionCreator} from "./profile-reducer";
import dialogsReducer, {sendMessageActionCreator, updateNewMessageBodyActionCreator} from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

export type StoreType = {
    _state: RootStateType
    _callSubscriber: () => void
    getState: () => RootStateType
    subscribe: (observer: () => void) => void
    dispatch: (action: ActionsTypes) => void
}
export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    sidebar: SidebarType
}
export type ProfilePageType = {
    posts: PostType[]
    newPostText: string
}
export type PostType = {
    id: number, message: string, likesCount: number
}
export type DialogsPageType = {
    dialogs: DialogType[]
    messages: MessagesType[]
    newMessageBody: string
}
export type MessagesType = {
    id: number, message: string
}
export type DialogType = {
    id: number, name: string
}
export type SidebarType = {}

export type ActionsTypes =
    ReturnType<typeof addPostActionCreator>
    | ReturnType<typeof updateNewPostTextActionCreator>
    | ReturnType<typeof sendMessageActionCreator>
    | ReturnType<typeof updateNewMessageBodyActionCreator>

/*export const addPostActionCreator = (postMessage: string) => {
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
export const sendMessageActionCreator = (messagesMessage: string) => {
    return {
        type: "SEND-MESSAGE",
        messagesMessage: messagesMessage
    } as const
}
export const updateNewMessageBodyActionCreator = (body: string) => {
    return {
        type: "UPDATE-NEW-MESSAGE-BODY",
        body: body
    } as const
}*/

let store: StoreType = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi, how are you', likesCount: 12},
                {id: 2, message: 'It\'s my first post', likesCount: 10},
                {id: 3, message: 'Blabla', likesCount: 10},
                {id: 4, message: 'Dada', likesCount: 10},
            ],
            newPostText: ''
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: 'Dimych'},
                {id: 2, name: 'Andrey'},
                {id: 3, name: 'Sveta'},
                {id: 4, name: 'Sasha'},
                {id: 5, name: 'Viltor'},
                {id: 6, name: 'Valera'}
            ],
            messages: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'How are you?'},
                {id: 3, message: 'Good'},
                {id: 4, message: 'Yo'},
                {id: 5, message: 'YoYo'}
            ],
            newMessageBody: ''
        },
        sidebar: {}
    },
    _callSubscriber() {
    },
    getState() {
        return this._state
    },
    subscribe(observer: () => void) {
        this._callSubscriber = observer
    },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._state.sidebar = sidebarReducer(this._state.sidebar, action)
        this._callSubscriber()

/*        if (action.type === 'ADD-POST') {
            const newPost: PostType = {
                id: new Date().getTime(),
                message: action.postMessage,
                likesCount: 0
            }
            this._state.profilePage.posts.push(newPost)
            this._state.profilePage.newPostText = ''
            this._callSubscriber()
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.newText
            this._callSubscriber()
        } else if (action.type === 'UPDATE-NEW-MESSAGE-BODY') {
            this._state.dialogsPage.newMessageBody = action.body
            this._callSubscriber()
        } else if (action.type === 'SEND-MESSAGE') {
            const newBody: MessagesType = {
                id: new Date().getTime(),
                message: action.messagesMessage
            }
            this._state.dialogsPage.messages.push(newBody)
            this._state.dialogsPage.newMessageBody = ''
            this._callSubscriber()
        }*/
    }
}

export default store