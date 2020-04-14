import React, {useState,useEffect} from 'react';

const ProfileStatusWithHooks = (props) => {
    const [editMode, setEditMode] = useState(false),
        [status, setStatus] = useState(props.status),
        activateMode = () => {
            setEditMode(true)
        },
        deactivateMode = () => {
            setEditMode(false)
            props.updateStatus(status);
        },
        onStatusChange = (e)=>{
            setStatus(e.currentTarget.value)
        };
    useEffect(()=>{
        setStatus(props.status)
    },[props.status])
    return (
        <div>
            {(editMode) ?
                <div>
                    <input onChange={onStatusChange} autoFocus={true} onBlur={deactivateMode}
                           value={status}/>
                </div>
                :
                <div>
                    <b>Status: </b><span onDoubleClick={activateMode}>{props.status || "----"}</span>
                </div>
            }
        </div>
    );
}
export default ProfileStatusWithHooks;
