import {authAPI} from "../API/API";
import {stopSubmit} from 'redux-form';
import {getAuthUserData} from "./authReducer";
const INITIALIZED_SUCCESS= 'INITIALIZED_SUCCESS';

let initialState = {
    initialized:false,
}

const AppReducer = (state=initialState,action)=>{

    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized:true
            }
            break;
        default:
            return state
            break;
    }
}



export const initializedSuccess = ()=>({type:INITIALIZED_SUCCESS})

export const initializeApp = ()=>(dispatch)=>{
    dispatch(getAuthUserData()).then(()=>{
        dispatch(initializedSuccess());
    })

}

export default AppReducer;