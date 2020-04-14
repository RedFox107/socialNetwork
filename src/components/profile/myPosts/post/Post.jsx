import React from 'react';
import s from'./Post.module.css';

const Posts = (props)=>{
	return (
		<div className={s.item}>
		<img src='https://newsland.com/static/u/photo/4081247083/b.jpg' />
			{props.message}
		<div><span>Like {props.likesCount}</span></div>
		</div>
	);
}
export default Posts;
