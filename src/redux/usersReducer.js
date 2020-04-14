import API_prototype from "../API/API";
import {updateObjectInArray} from "../utils/objectHelper";

const FOLLOW = "FOLLOW",
    UNFOLLOW = "UNFOLLOW",
    SET_CURRENT_PAGE = "SET_CURRENT_PAGE",
    SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT",
    TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING",
    TOGGLE_IS_FOLLOWING_PROGRESS = "TOGGLE_IS_FOLLOWING_PROGRESS",
    SET_USERS = "SET_USERS";


const initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: [],
};


const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users,action.userId,"id",{followed:true}),
            };
            break;
        case UNFOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users,action.userId,"id",{followed:false}),
            };
            break;
        case SET_USERS:
            return {
                ...state,
                users: action.users
            };
            break;
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage
            }
            break;
        case SET_TOTAL_USERS_COUNT:
            return {
                ...state,
                totalUsersCount: action.totalUsersCount
            }
            break;
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            }
        case TOGGLE_IS_FOLLOWING_PROGRESS:
            return {
                ...state,
                followingInProgress: action.isFetching ? [...state.followingInProgress, action.userId] : [...state.followingInProgress.filter(id => id != action.userId)]
            }
            break;
        default:
            return state;
            //alert("Error from dialogsReducer.js: method dispatch!")
            break;
    }
};


export const followSuccessAC = (id) => ({userId: id, type: FOLLOW,});
export const unFollowSuccessAC = (id) => ({userId: id, type: UNFOLLOW,});
export const setUserAC = (users) => ({type: SET_USERS, users});
export const setCurrentPageAC = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});
export const setTotalUsersCountAC = (totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT, totalUsersCount});
export const toggleIsFetchingAC = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});
export const toggleFollowingProgressAC = (isFetching, userId) => ({
    type: TOGGLE_IS_FOLLOWING_PROGRESS,
    isFetching,
    userId
});

//---
export const followUnfollowFlow = async (dispatch,userId,apiMethod,actionCreator)=>{

    dispatch(toggleFollowingProgressAC(true, userId));
    const response = await apiMethod(userId);
    if (response.data.resultCode == 0) {
        dispatch(actionCreator(userId))
    }
    dispatch(toggleFollowingProgressAC(false, userId));
}


export const getUsersThunkCreator = (currentPage, pageSize) => async (dispatch) => {
    dispatch(setCurrentPageAC(currentPage));
    dispatch(toggleIsFetchingAC(true));
    const data = await API_prototype.get('users', {
        page: currentPage,
        count: pageSize
    })
    dispatch(setUserAC(data.items))
    dispatch(setTotalUsersCountAC(data.totalCount));

    dispatch(toggleIsFetchingAC(false))


}
export const followThunkCreator = (userId) => async (dispatch) => {
    followUnfollowFlow(dispatch,userId,API_prototype.follow.bind(API_prototype),followSuccessAC)
}

export const unFollowThunkCreator = (userId) => async (dispatch) => {
    followUnfollowFlow(dispatch,userId,API_prototype.unfollow.bind(API_prototype),unFollowSuccessAC)
}
//---
export default usersReducer;