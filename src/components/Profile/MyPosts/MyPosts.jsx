import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, requiredField} from "../../../utils/validators/validators";
import {Textarea} from "../../common/FormControls/FormControls";

const maxLength10 = maxLengthCreator(10)
const AddPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea} name={'newPost'} validate={[requiredField, maxLength10]}
                placeholder={'Post message'}/>
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}
const AddPostReduxForm = reduxForm({
    form: "addPost"
})(AddPostForm);

const MyPosts= React.memo=(props)=> {
    console.log("werwer")
    const onSubmit = (formData) => {
        props.addPost(formData.newPost);
    }
    let postsElements = props.posts.map((p) => <Post message={p.post} like={p.likesCount}/>);

    return <div className={s.postsBlock}>
        <h3>My posts</h3>
        <div>
            <AddPostReduxForm onSubmit={onSubmit}/>
        </div>
        <div className={s.posts}>
            {postsElements}
        </div>
    </div>
}

export default MyPosts;