import profileReducer, {ProfileReducerType} from "./profile-reducer";
import dialogsReducer, {DialogsReducerType} from "./dialogs-reducer";
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

export type ActionsTypes = ProfileReducerType | DialogsReducerType

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
        this._state.profilePage = profileReducer(this._state.profilePage, action as ProfileReducerType)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action as DialogsReducerType)
        this._state.sidebar = sidebarReducer(this._state.sidebar, action)
        this._callSubscriber()
    }
}

export default store