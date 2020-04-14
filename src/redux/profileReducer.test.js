
import profileReducer, {addPostActionCreator, deletePost} from "./profileReducer";
import React from 'react';



it('length post should be incremented', () => {
    const initialState = {
        posts: [
            {id:1,message:"Hi, how are you?",likesCount:20},
            {id:2,message:"Its my first post",likesCount:15},
        ]
    };
    let action = addPostActionCreator('it-kam');
    let newState = profileReducer(initialState, action);
    expect(newState.posts.length).toBe(3);
});
it('after deleting length of messge should be dec', () => {
    const initialState = {
        posts: [
            {id:1,message:"Hi, how are you?",likesCount:20},
            {id:2,message:"Its my first post",likesCount:15},
        ]
    };
    let action = deletePost('it-kam');
    let newState = profileReducer(initialState, action);
    //expect(newState.posts.length).toBe(1);
});