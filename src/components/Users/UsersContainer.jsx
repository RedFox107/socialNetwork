import React from 'react';
import {connect} from 'react-redux';
import {
    toggleFollowingProgressAC, getUsersThunkCreator, unFollowThunkCreator, followThunkCreator
} from "../../redux/usersReducer";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import {withAuthRedirectComponent} from "../../HOC/withAuthRedirect";
import {compose} from 'redux';
import {
    getCurrentPage,
    getFollowingInProgress, getIsFetching,
    getPageSize,
    getTotalUsersCount,
    getUsers, getUserSuper
} from "../../redux/usersSelectors";





class UsersContainer extends React.Component{
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        this.props.getUsersThunkCreator(this.props.currentPage,this.props.pageSize);
    }
    onPageChanged = (pageNumber)=>{
        //this.props.setCurrentPage(pageNumber)
        this.props.getUsersThunkCreator(pageNumber,this.props.pageSize);
    }

    render() {
        return (<>
            <Preloader isFetching={this.props.isFetching}/>


            <Users
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                onPageChanged={this.onPageChanged}
                currentPage={this.props.currentPage}
                unfollow={this.props.unfollow}
                follow={this.props.follow}
                users={this.props.users}
                followingInProgress={this.props.followingInProgress}
            />
        </>);
    }

}

/*

const mapStateToProps = (state)=>{
    return {
        users:state.usersPage.users,
        pageSize:state.usersPage.pageSize,
        totalUsersCount:state.usersPage.totalUsersCount,
        currentPage:state.usersPage.currentPage,
        isFetching:state.usersPage.isFetching,
        followingInProgress:state.usersPage.followingInProgress

    }
};
*/

const mapStateToProps = (state)=>{
    return {
        users:getUserSuper(state),
        pageSize:getPageSize(state),
        totalUsersCount:getTotalUsersCount(state),
        currentPage:getCurrentPage(state),
        isFetching:getIsFetching(state),
        followingInProgress:getFollowingInProgress(state)

    }
};
/*
const mapDispatchToProps = (dispatch)=>{
    return {
        follow:(userId)=>{
            dispatch(followAC(userId));
        },
        unfollow:(userId)=>{
            dispatch(unFollowAC(userId));
        },
        setUsers:(users)=>{
            dispatch(setUserAC(users));
        },
        setCurrentPage:(pageNumber)=>{
            dispatch(setCurrentPageAC(pageNumber));
        },
        setTotalUsersCount:(totalUsersCount)=>{
            dispatch(setTotalUsersCountAC(totalUsersCount));
        },
        toggleIsFetching:(isFetching)=>{
            dispatch(toggleIsFetchingAC(isFetching));
        }
    }
};// this is full mDTP*/

const mDTP = {
    follow:followThunkCreator,
    unfollow:unFollowThunkCreator,
    //setCurrentPage:setCurrentPageAC,
    toggleFollowingProgress:toggleFollowingProgressAC,
    getUsersThunkCreator:getUsersThunkCreator,
}

export default compose(
    connect(mapStateToProps,mDTP),
    //withAuthRedirectComponent
)(UsersContainer);

// export default withAuthRedirectComponent(connect(mapStateToProps,mDTP)(UsersContainer));

/*
const AuthRedirectComponent = withAuthRedirectComponent(UsersContainer)

export default connect(mapStateToProps,mDTP)(AuthRedirectComponent);*/

