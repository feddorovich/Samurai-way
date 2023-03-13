import {combineReducers, createStore} from "redux";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";
import profileReducer from "./profile-reducer";

let reducers = combineReducers({
    profileReducer,
    dialogsReducer,
    sidebarReducer
})

let store = createStore(reducers)

export type AppStoreType = ReturnType<typeof reducers>

export default store