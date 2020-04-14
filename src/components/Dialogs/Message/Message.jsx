import React from 'react';
import s from '../Dialogs.module.css';//styles
const Message = (props)=>{
	const selfId= 1;
	return(
		<div className={`${(props.id === selfId)?s.selfMessage:s.OtherMessage}  ${s.flexWidth}`}>{props.message}</div>
	)
}
export default Message;
