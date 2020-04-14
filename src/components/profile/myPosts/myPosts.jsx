import React from 'react';
import s from './myPosts.module.css';
import Post from './post/Post';
import {reduxForm, Field} from 'redux-form';
import {maxLenghtCreator, required} from "../../../utils/Validators/validators";
import {FormControlCreator} from "../../common/FormsControls/formsControls.jsx";

const maxLenghtCreator1 = maxLenghtCreator(10);
const AddNewPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={"Create new post"} component={FormControlCreator('textarea')} name={"newPost"} validate={[required,maxLenghtCreator1]}/>
            </div>
            <div>
                <button>Add posts</button>
            </div>
        </form>
    )
}

const PostReduxForm = reduxForm({
    form: 'post'
})(AddNewPostForm)


const myPosts = React.memo((props) => {
    const postsElements = props.posts.map((p) => (<Post message={p.message} likesCount={p.likesCount}/>))
    const addPost = (value) => {
        props.addPosts(value.newPost);
    };
    return (
        <div>
            <div className={s.postBlock}>
                <h3>My posts</h3>
                <PostReduxForm onSubmit={addPost}/>
            </div>
            <div className={s.posts}></div>

            {postsElements}
        </div>
    );
})


/*
class myPostsClassComponent extends React.PureComponent {
    /!*shouldComponentUpdate(nextProps, nextState, nextContext) {
        return nextProps!=this.props||nextState!=this.state
    }*!/

    render() {
        console.log("render")
        const postsElements = this.props.posts.map((p) => (<Post message={p.message} likesCount={p.likesCount}/>))
        const addPost = (value) => {
            this.props.addPosts(value.newPost);
        };
        return (
            <div>
                <div className={s.postBlock}>
                    <h3>My posts</h3>
                    <PostReduxForm onSubmit={addPost}/>
                </div>
                <div className={s.posts}></div>

                {postsElements}
            </div>
        );
    }
}
*/


export default myPosts;