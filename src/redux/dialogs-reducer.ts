import {DialogsPageType, MessagesType} from "./state";

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

const dialogsReducer = (state: DialogsPageType, action: DialogsReducerType) => {
    switch (action.type) {
        case 'UPDATE-NEW-MESSAGE-BODY':
            state.newMessageBody = action.body
            break;
        case 'SEND-MESSAGE':
            const newBody: MessagesType = {
                id: new Date().getTime(),
                message: action.messagesMessage
            }
            state.messages.push(newBody)
            state.newMessageBody = ''
            break;
        default:
            return state
    }

    return state
}

export default dialogsReducer