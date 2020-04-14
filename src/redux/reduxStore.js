import {createStore,combineReducers,applyMiddleware,compose} from "redux"
import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import navbarFriendsReducer from "./navbarFriendsReducer";
import usersReducer from "./usersReducer";
import authReducer from "./authReducer";
import thunkMiddleware from 'redux-thunk';
import {reducer as formReducer} from 'redux-form';
import AppReducer from "./AppReducer";



const reducers = combineReducers({
    ProfilePage:profileReducer,
    DialogsPage:dialogsReducer,
    navbarFriend:navbarFriendsReducer,
    usersPage:usersReducer,
    auth:authReducer,
    form:formReducer,
    app:AppReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers,  composeEnhancers(applyMiddleware(thunkMiddleware)));

//const store = createStore(reducers,applyMiddleware(thunkMiddleware));
//window.store = store;
export default store;