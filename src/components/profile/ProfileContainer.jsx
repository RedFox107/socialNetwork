import React from 'react';
import {connect} from 'react-redux';
import {getUserProfile, getUserStatus, savePhoto, saveProfile, updateUserStatus} from "../../redux/profileReducer";
import Profile from "./Profile";
import {withRouter} from 'react-router-dom';
import {compose} from 'redux';

class ProfileContainer extends React.Component {

    refreshProfile(){
        let userId = this.props.match.params.userId;

        if (!userId) {

            userId = this.props.authorizedUserId;
            if (!userId) {
                this.props.history.push("/login");
            } else {
                this.props.getUserProfile(userId)//need fix
                this.props.getUserStatus(userId)//need fix
            }

        } else {
            this.props.getUserProfile(userId)//need fix
            this.props.getUserStatus(userId)//need fix
        }
    }

    componentDidMount() {
        this.refreshProfile();


    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevProps.match.params.userId != this.props.match.params.userId){
            this.refreshProfile();
        }

    }

    render() {

        return (
            <div>
                <Profile {...this.props}
                         profile={this.props.profile}
                         status={this.props.status}
                         updateStatus={this.props.updateUserStatus}
                         isOwner={!this.props.match.params.userId}
                         savePhoto={this.props.savePhoto}
                />
            </div>
        );
    }
}


const mSTP = (state) => ({
    profile: state.ProfilePage.profile,
    status: state.ProfilePage.status,
    authorizedUserId: state.auth.userId,
    isAuth: state.auth.isAuth
})

export default compose(
    connect(mSTP, {getUserProfile, getUserStatus, updateUserStatus,savePhoto,saveProfile}),
    withRouter,
    //withAuthRedirectComponent,
)(ProfileContainer)


/*
let AuthRedirectComponent = withAuthRedirectComponent(ProfileContainer);
const WithUrlDataContainerComponent = withRouter(AuthRedirectComponent);

export default connect(mSTP,{getUserProfile})(WithUrlDataContainerComponent);*/
