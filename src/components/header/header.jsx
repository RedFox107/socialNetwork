import React from 'react';
import s from './header.module.css';
import {NavLink} from 'react-router-dom';
const Header = (props)=>{
    return (
        <header className={s.header}>
            <img src='https://lh3.googleusercontent.com/proxy/QxQHXc6VWSczgBko3iRoCaxEjKMcX79_HTU7NiunsrKXsrSqwyqGc-Ea06umoyBbaUoHQcDvvi6NH5G3M2F32dfz0oRfDGlCXmG4K-BIn08uknq7AUw_Sg'/>
            <div className={s.loginBlock}>
                <img src={(props.ava==='')?'':props.ava.photos.small}/>
                {props.isAuth?<div>{props.login} - <button onClick={props.logOut}>LogOut</button></div>:<NavLink to='/login'>Login</NavLink>}
            </div>
        </header>
    );
}
export default Header;