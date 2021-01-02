
import React from "react";
import {addPostActionCreator, deletePost, profileReducer} from "./profileReducer";
import {PostsType} from "../types/types";

let state= {
    posts: [
        {id: 1, post: 'hi, how are you', likesCount: 1},
        {id: 2, post: 'It`s my first post', likesCount: 2},
    ]
}
it('length of posts should incremented', () => {
    let action=addPostActionCreator("текст нового поста");
    let newState  = profileReducer(state,action);
    expect(newState.posts.length).toBe(3);
});

it('message of new post should be correct', () => {
    let action=addPostActionCreator("текст нового поста");
    let newState = profileReducer(state,action)
    expect(newState.posts[2].post).toBe("текст нового поста");
});

it('likesCount of new post should be 0', () => {
    let action=addPostActionCreator("текст нового поста");
    let newState = profileReducer(state,action)
    expect(newState.posts[2].likesCount).toBe(0)
});

it('after deleting length of messages should be decrement', () => {
    let action=deletePost(1);
    let newState = profileReducer(state,action)
    expect(newState.posts.length).toBe(1)
});

it('after deleting length should`nt be decrement if id is incorrect', () => {
    let action=deletePost(1000);
    let newState = profileReducer(state,action)
    expect(newState.posts.length).toBe(2)
});

