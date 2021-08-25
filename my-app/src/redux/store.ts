import {combineReducers, createStore} from "redux";
import userReducer from "./userReducer";


const rootReducer = combineReducers({
    users: userReducer
})

const store = createStore(rootReducer)

export default store

export type AppStateType = ReturnType<typeof rootReducer> // {} 1.Определяется тип rootReducer 2.Возвращается данный тип

// @ts-ignore
window.store = store // чтобы видеть в браузере