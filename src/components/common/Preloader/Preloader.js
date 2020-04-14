import React from 'react';
import path from "../../../760.gif";

const Preloader =  (props)=>{
    return <div>
        {props.isFetching?<img src={path}/>:null}
    </div>
}

export default Preloader;