import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import thunkMiddleware from "redux-thunk";
import { reducer as formReducer} from "redux-form";
import AppReducer from "./Reducers/AppReducer";
import CasesReducer from "./Reducers/CasesReducer";
import CaseInfoReducer from "./Reducers/CaseInfoReducer";
import GunsFeedReducer from "./Reducers/GunsFeedReducer";
import {ProfileReducer} from "./Reducers/ProfileReducer";
import {AuthReducer} from "./Reducers/AuthReducer";
import RouletteReducer from "./Reducers/RouletteReducer";


const MainReducer = combineReducers({
    App: AppReducer,
    form: formReducer,
    Cases: CasesReducer,
    CaseInfo: CaseInfoReducer,
    GunsFeed: GunsFeedReducer,
    Profile: ProfileReducer,
    Auth: AuthReducer,
    Roulette: RouletteReducer
})
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(MainReducer, composeEnhancers(applyMiddleware(thunkMiddleware)))


export default store


window.__store__ = store