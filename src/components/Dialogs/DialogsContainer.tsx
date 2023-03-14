import React from 'react';
import {sendMessageActionCreator, updateNewMessageBodyActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";

type DialogsPropsType = {
    // state: DialogsPageType
    // dispatch: (action: ActionsTypes) => void
}

const DialogsContainer: React.FC = (props) => {

    return (
        <>
            <StoreContext.Consumer>
                {
                    (store: any) => {

                        const state = store.getState()

                        const onSendMessageClick = () => {
                            store.dispatch(sendMessageActionCreator(state.dialogPage.newMessageBody))
                        }
                        const onNewMessageChange = (text: string) => {
                            if (text) {
                                store.dispatch(updateNewMessageBodyActionCreator(text))
                            }
                        }

                        return (
                            <Dialogs updateNewMessageBody={onNewMessageChange}
                                     SendMessage={onSendMessageClick}
                                     state={state.dialogPage}/>
                        )
                    }
                }
            </StoreContext.Consumer>
        </>

    );
};

export default DialogsContainer;