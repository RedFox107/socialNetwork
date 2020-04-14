import React from 'react';
import s from'./navbar.module.css';
import {NavLink} from 'react-router-dom';
const Navbar = (props)=>{
	//const friends = props.state.friends.map((f)=>(<div className={s.friend}><img src={f.img}/>{f.name}</div>));
	return(
	  <nav className={s.nav}>
		  <div className={s.item} ><NavLink to='/profile' activeClassName={s.activeLink}>Profile</NavLink></div>
		  <div className={s.item}><NavLink to='/dialogs' activeClassName={s.activeLink}>Messages</NavLink></div>
		  <div className={s.item}><NavLink to='/users' activeClassName={s.activeLink}>Users</NavLink></div>
		  <div className={s.item}><NavLink to='/news' activeClassName={s.activeLink}>News</NavLink></div>
		  <div className={s.item}><NavLink to='/music' activeClassName={s.activeLink}>Music</NavLink></div>
		  <div className={s.item}><NavLink to='/settings' activeClassName={s.activeLink}>Settings</NavLink></div>
		  {
		  	//1
		  }

	  
	  </nav>
	);
}
export default Navbar;

//<div className={s.friends}>{friends}</div>