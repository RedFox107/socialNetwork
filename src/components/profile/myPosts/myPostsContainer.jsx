import React from 'react';
import {addPostActionCreator} from "../../../redux/profileReducer";
import MyPosts from "./myPosts";
import {connect} from 'react-redux';
import {compose} from 'redux';

const mapStateTiProps = (state)=>{
	return {
		posts:state.ProfilePage.posts,
	}
};
const mapDispatchToProps = (dispatch)=>{
	return {
		addPosts:(text)=>{
			dispatch(addPostActionCreator(text))
		},
	}
};

export default compose(
	connect(mapStateTiProps,mapDispatchToProps)
)(MyPosts)


// const superMyPostsContainer = connect(mapStateTiProps,mapDispatchToProps)(MyPosts);
// export default superMyPostsContainer;

/*
const myPostsContainer = (props)=>{
	//const state = props.store.getState();

	return (
		<StoreContext.Consumer>
			{(store) => {
				//debugger
				const addPost= ()=>{

				};

				const onPostChange = (text)=>{

				};
				const state = store.getState();
				return <MyPosts
					updateNewPostText={onPostChange}
					addPosts={addPost}
					posts={state.ProfilePage.posts}
					newPostText={state.ProfilePage.newPostText}/>
			}
			}
		</StoreContext.Consumer>
	);
}
 */
