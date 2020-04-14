import {Redirect} from 'react-router-dom';
import React from 'react'
import {connect} from 'react-redux';

export const withAuthRedirectComponent = (Component)=>{
    class RedirectComponent extends React.Component{
        render() {
            if(!this.props.isAuth) return <Redirect to={'/login'}/>
            return <Component {...this.props}/>
        }
    }
    const mSTPForRedirect = (state)=>({
        isAuth: state.auth.isAuth
    })
    const ConnectedAuthRedirectComponent = connect(mSTPForRedirect)(RedirectComponent);
    return ConnectedAuthRedirectComponent
}