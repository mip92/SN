import React from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";

/*const MyPostsContainer = (props) => {
    return (
        (store) => {
            let state = store.getState();
            let addPost = () => {
                store.dispatch(addPostActionCreator());
            };

            let onPostChange = (text) => {
                store.dispatch(updateNewPostTextActionCreator(text));
            };
            return <MyPosts updateNewPostText={onPostChange}
                            addPost={addPost}
                            posts={state.profilePage.posts}
                            newPostText={state.profilePage.newPostText}
            />
        }
    )
}*/
let mapStateToProps=(state)=>{
    return{
        posts: state.profilePage.posts,
        newPostText:state.profilePage.newPostText,
    }
}

let mapDispatchToProps=(dispatch)=>{
    return{
        addPost:(text)=>{dispatch(addPostActionCreator(text))},
    }
}
const MyPostsContainer=connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;