import API_prototype, {profileAPI} from "../API/API";
import {stopSubmit} from  'redux-form';
const updateNewPostText = "UPDATE-NEW-POST-TEXT",
    SET_USER_PROFILE = "SET_USER_PROFILE",
    SET_STATUS = "SET_STATUS",
    DELETE_POST = "DELETE_POST",
    SAVE_PHOTO_SUCCESS = "SAVE_PHOTO_SUCCESS",
    ADD_POST = 'ADD-POST';

const initialState = {
    profile:null,
    posts: [
        {id:1,message:"Hi, how are you?",likesCount:20},
        {id:2,message:"Its my first post",likesCount:15},
    ],
    newPostText:'',
    status:'',
};



const profileReducer = (state = initialState,action)=>{

    // const stateCopy = {...state};
    // stateCopy.posts = [...state.posts]
    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                posts:[
                    ...state.posts,
                    {
                        id: state.posts.length,
                        message: action.text,
                        likesCount: 0,
                    }
                ],
                newPostText: '',
            }
            break;
        case SET_USER_PROFILE:
            return {
                ...state,
                profile:action.profile
            }
            break;
        case SET_STATUS:
            return {
                ...state,
                status:action.status
            }
            break;
        case DELETE_POST:
            return {
                ...state,
                posts: state.posts.filter((el)=>el.id!=action.postId)
            }
            break;
        case SAVE_PHOTO_SUCCESS:
            return {
                ...state,
                profile:{...state.profile,photos:action.photos}
            }
            break;

        default:
            return state;
            //alert("Error from profileReducer.js: method dispatch!")
            break;
    }
}

//--------------actionCreators----------------------
export const addPostActionCreator = (text)=> ({type: ADD_POST,text})
export const setUserProfile = (profile)=>({type:SET_USER_PROFILE,profile});
export const setStatus = (status)=>({type:SET_STATUS,status});
export const deletePost = (postId)=>({type:DELETE_POST,postId});
export const savePhotoSuccess = (photos)=>({type:SAVE_PHOTO_SUCCESS,photos});

//----------------thunk------------------------------


export const getUserProfile = (userId) => async (dispatch) => {
    const response = await API_prototype.getProfile(userId)
    dispatch(setUserProfile(response.data));

}

export const savePhoto = (file) => async (dispatch) => {
    const response = await profileAPI.savePhoto(file)
    if(response.data.data.resultCode == 0){
        dispatch(savePhotoSuccess(response.data));
    }
}

export const saveProfile = (profileData) => async (dispatch,getState) => {
    const response = await profileAPI.saveProfile(profileData)

    if(response.data.resultCode == 0){

        dispatch(getUserProfile(getState().auth.userId));
    }else{
        const message = (response.data.messages.length > 0) ? response.data.messages[0] : "Some Error";
        dispatch(stopSubmit('editProfile', {_error: message}))
    }
}

export const getUserStatus = (userId) => {
    return async (dispatch) => {
        let response = await profileAPI.getStatus(userId)
        dispatch(setStatus(response.data));
    }
}

export const updateUserStatus = (status) => async (dispatch) => {
    try{
        const response = await profileAPI.updateStatus(status)
        if (response.data.resultCode === 0) {
            //debugger
            dispatch(setStatus(status));
        }
    }catch (e) {
        alert(e.message)
    }

}



export default profileReducer;