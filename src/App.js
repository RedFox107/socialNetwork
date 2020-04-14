import React from 'react';
import {connect} from 'react-redux';
import {compose} from 'redux';
import './App.css';
import Navbar from './components/navbar/navbar';
//import ProfileContainer from './components/profile/ProfileContainer';
import News from './components/news/news';
import Music from './components/music/music';
import Settings from './components/settings/settings';
import {Route, withRouter} from 'react-router-dom';
//import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/header/headerContainer";
import Login from "./components/Login/Login";
import {initializeApp} from "./redux/AppReducer";
import Preloader from "./components/common/Preloader/Preloader";
import {withSuspense} from "./HOC/withSuspense";
import {Switch,Redirect} from 'react-router-dom';
const DialogsContainer = React.lazy(()=>import('./components/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(()=>import('./components/profile/ProfileContainer'));
class App extends React.Component {
    catchAllUnhandledErrors = (reason,promise)=>{
        console.log(reason,promise)
        //console.error()
    }
    componentDidMount() {
        this.props.initializeApp();
        window.addEventListener("unhandledrejection",this.catchAllUnhandledErrors)
    }
    componentWillUnmount() {
        window.removeEventListener('unhandledrejection',this.catchAllUnhandledErrors)
    }

    render() {
        if(!this.props.initialized) return <Preloader isFetching={!this.props.initialized}/>
        return (
            <div className='appWrapper'>
                <HeaderContainer/>
                <Navbar/>
                <div className='appWrapperContent'>
                    <Switch>
                        <Route path="/profile/:userId?" render={withSuspense(ProfileContainer)}/>
                        <Route path="/dialogs" render={withSuspense(DialogsContainer)}/>
                        <Route path="/users" render={() => (<UsersContainer/>)}/>
                        <Route path="/news" render={() => (<News/>)}/>
                        <Route path="/music" component={Music}/>
                        <Route path="/settings" component={Settings}/>
                        <Route exact path="/login" render={() => <Login/>}/>
                        <Redirect from={'/'} to={'/profile'}/>
                    </Switch>
                </div>
            </div>
        )
    }
}

const mSTP = (state)=>({
    initialized:state.app.initialized
})

export default compose(
    connect(mSTP, {initializeApp})
)(App)
