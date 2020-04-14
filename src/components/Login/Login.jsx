import React from 'react';
import {connect} from 'react-redux';
import {reduxForm,Field} from 'redux-form';
import {FormControlCreator} from "../common/FormsControls/formsControls";
import {required} from "../../utils/Validators/validators";
import {login} from "../../redux/authReducer";
import {Redirect} from 'react-router-dom';
import s from './../common/FormsControls/formsControls.module.css'
const LoginForm =({handleSubmit,error,captcha})=>{
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <Field component={FormControlCreator('input')} name={"email"} placeholder={"Login"} validate={[required]}/>
            </div>
            <div>
                <Field placeholder={"Password"} type={"password"} name={"password"} component={FormControlCreator('input')} validate={[required]}/>
            </div>
            <div>
                <Field type={"checkbox"} name={"rememberMe"} component={FormControlCreator('input')} validate={[]}/> remember me
            </div>
            {captcha && <div>
                <img src={captcha}/>
                <Field
                    component={FormControlCreator('input')}
                    placeholder={"Enter the captcha..."}
                    validate={[required]}
                    name={"captcha"}
                />
            </div>}
            {(error) &&<div className={s.formSummaryError}>
                {error}
            </div>}

            <div>
                <button>Login</button>
            </div>
        </form>)
}

const LoginReduxFrom = reduxForm({
        form: "login"
})(LoginForm)




const Login =(props)=>{
    const onSubmit = (formData)=>{
        props.login(formData.email,formData.password,formData.rememberMe,formData.captcha)
    }
    if(props.isAuth){
        return <Redirect to={'profile'}/>
    }
    return (<div>
        <h1>Login</h1>
        <LoginReduxFrom onSubmit={onSubmit} captcha={props.captcha}/>
    </div>)
}

const mSTP = (state)=>({isAuth:state.auth.isAuth,captcha:state.auth.captchaUrl})

export default connect(mSTP,{login})(Login);