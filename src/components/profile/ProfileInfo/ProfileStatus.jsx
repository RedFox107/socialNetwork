import React from 'react';
import s from'./ProfileInfo.module.css';

class ProfileStatus extends React.Component {
    state = {
        editMode:false,
        status:this.props.status
    }
    deactivateEditMode =()=>{
        this.setState({
            editMode:!this.state.editMode
        });
        //debugger
        this.props.updateStatus(this.state.status)
    }
    activateEditMode =()=>{
        this.setState({
            editMode:!this.state.editMode
        });
    }
    onStatusChange = (e)=>{

        this.setState({
            status:e.currentTarget.value
        });
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevProps.status !==this.props.status){
            this.setState({
                status:this.props.status,
            })
        }
    }

    render() {

        return (
            <>
                {(this.state.editMode) ?
                    <div>
                        <input onChange={this.onStatusChange} autoFocus={true} onBlur={this.deactivateEditMode} value={this.state.status}/>
                    </div>
                    :
                    <div>
                    <span  onDoubleClick={this.activateEditMode}>{this.props.status || "----"}</span>
                    </div>
                }
            </>
        );
    }
}
export default ProfileStatus;
