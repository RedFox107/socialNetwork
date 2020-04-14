import React from 'react';
import s from './formsControls.module.css'
import {required} from "../../../utils/Validators/validators";

const FormControl = ({input,meta,elementType,...props}) =>{
    const el = React.createElement(elementType,{...input, ...props}),
        hasError = meta.touched&&meta.error;
    return (
        <div className={`${s.formControl} ${hasError?s.error: ''}`}>
            <div>
                {el}
            </div>
            {hasError && <span>{meta.error}</span>}
        </div>
    )
}

export const FormControlCreator = (type)=>(props)=>(<FormControl {...props} elementType={type}/>)
