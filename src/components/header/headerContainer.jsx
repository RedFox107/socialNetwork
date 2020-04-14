import React from 'react';
import Header from "./header";
import {getAuthUserData, logOut} from "../../redux/authReducer";
import {connect} from 'react-redux'
class HeaderContainer extends React.Component{


    render() {
        return (
            <Header {...this.props}/>
        );
    }
}

const mSTP = (state)=>({
    isAuth:state.auth.isAuth,
    login:state.auth.login,
    ava:state.ProfilePage.profile||''//dop
})


export default connect(mSTP,{logOut})(HeaderContainer);