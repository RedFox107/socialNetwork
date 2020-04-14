import React from 'react';
import s from '../Dialogs.module.css';//styles
import {NavLink} from 'react-router-dom';
const DialogItem = (props)=> {
	const path = "/dialogs/" + props.id;

	return (
		<div className={`${s.dialog}`}>
			<img src={props.img}/>
			<NavLink to={path}>{props.name}</NavLink>
		</div>
	);
}
export default DialogItem;
