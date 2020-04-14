import React from 'react';
import MyPostsContainer from './myPosts/myPostsContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import Preloader from "../common/Preloader/Preloader";
const Profile = (props)=>{
	if(!props.profile){
		return <Preloader/>
	}


return (
<div> 
	<ProfileInfo saveProfile={props.saveProfile} savePhoto={props.savePhoto} isOwner={props.isOwner} profile={props.profile} status={props.status} updateStatus={props.updateStatus}/>
	<MyPostsContainer/>
</div>
);
}
export default Profile;
