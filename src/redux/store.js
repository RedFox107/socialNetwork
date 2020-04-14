import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
const store = {
    _state:{
        ProfilePage:{},
        DialogsPage:{},
        NavbarFriends:{},
    },
    get state(){
        return this._state;
    },
    _callSubscriber(){},
    subscrib(observer){
        this._callSubscriber = observer;
    },
    dispatch(action){//{type: 'ADD-POST',}
        this._state.ProfilePage = profileReducer(this._state.ProfilePage,action)
        this._state.DialogsPage = dialogsReducer(this._state.DialogsPage,action)
        this._callSubscriber(this.state)
    },
}
export default store;