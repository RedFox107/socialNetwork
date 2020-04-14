import React,{useState} from 'react';
import s from'./ProfileInfo.module.css';
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import ProfileDataReduxFrom from "./ProfileDataForm";
const fixUrl = 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTmWTBYno5e6POwsWXxUPYv0qYj3EcBbLkZfyTeshTg4ejMXv2q';
const ProfileInfo= ({profile,status,updateStatus,...props})=>{
	const [editMode, setEditMode] = useState(false);
	const onMainPhotoSelected = (e)=>{

		if(e.target.files.length>0){
			props.savePhoto(e.target.files[0]);
		}
	}
	/*const onSubmit = async (formData)=>{
		const promise = await props.saveProfile(formData)
		setEditMode(false)
	} в идеале так, но сервер...*/
	const onSubmit = (formData)=>{
		props.saveProfile(formData).then(()=>{console.log("Воу сервак ответил");setEditMode(false)},(error)=>{setEditMode(false)})

	}
	return(
		<div>

			<div className={s.descriptionBlock}>
				<img src={profile.photos.large || fixUrl} className={s.mainPhoto} />
				{props.isOwner && <input type={"file"} onChange={onMainPhotoSelected}/>}
				{editMode ?
					<ProfileDataReduxFrom initialValues={profile} exitFromEditMode={()=>{setEditMode(false)}} onSubmit={onSubmit}/>
					:
					<ProfileData editMode={editMode} profile={profile} isOwner={props.isOwner} goToEditMode={()=>{setEditMode(true)}}/>}

				<ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
			</div>
		</div>
	);
}
export default ProfileInfo;

const ProfileData = ({profile,isOwner,...props})=>{
	return (
		<div>
			{isOwner && <div>
				<button onClick={props.goToEditMode}>Edit</button>
			</div>}
			<div>
				<b>Full name </b>:{profile.fullName}
			</div>
			<div>
				Looking for a job: {profile.lookingForAJob?'yes':"no"}
			</div>
			{profile.lookingForAJob && <div>
				<b>My professional skills </b>{profile.lookingForAJobDescription}
			</div>}
			<div>
				AboutMe:{profile.aboutMe}
			</div>
			<div>
				<b>AboutMe</b><Contacts contacts={profile.contacts}/>
			</div>
		</div>
	)
}


const Contacts = (props)=>{
	const allContacts = [];
	for(let [key,value] of Object.entries({...props.contacts})){
		allContacts.push(<div>
			{key}: {value}
		</div>)
	}
	return (
		<div>
			{allContacts}
		</div>
	)
}
