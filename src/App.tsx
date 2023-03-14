import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {Route} from "react-router-dom";
import {ActionsTypes, RootStateType} from "./redux/store";
import {AppStoreType} from "./redux/redux-store";
import DialogsContainer from "./components/Dialogs/DialogsContainer";

type AppPropsType ={
    state: AppStoreType
    dispatch: (action: ActionsTypes) => void
}

function App(props: AppPropsType ) {
    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <div className={'app-wrapper-content'}>

                <Route path={'/dialogs'}
                       render={() => <DialogsContainer
                           state={props.state.dialogPage}
                           dispatch={props.dispatch}
                       />}/>

                <Route path={'/profile'}
                       render={() => <Profile
                           profilePage={props.state.profilePage}
                           dispatch={props.dispatch}
                       />}/>
            </div>
        </div>
    );
}

export default App;
