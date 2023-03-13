import {DialogsPageType, MessagesType} from "./store";

export type DialogsReducerType = SendMessageActionType | UpdateNewMessageBodyActionType
type SendMessageActionType = ReturnType<typeof sendMessageActionCreator>
type UpdateNewMessageBodyActionType = ReturnType<typeof updateNewMessageBodyActionCreator>

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
}

let initialState = {
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
}

const dialogsReducer = (state: DialogsPageType = initialState, action: DialogsReducerType) => {
    if (action.type === 'UPDATE-NEW-MESSAGE-BODY') {
        state.newMessageBody = action.body
    } else if (action.type === 'SEND-MESSAGE') {
        const newBody: MessagesType = {
            id: new Date().getTime(),
            message: action.messagesMessage
        }
        state.messages.push(newBody)
        state.newMessageBody = ''
    } else {
        return state
    }

    return state
}

export default dialogsReducer