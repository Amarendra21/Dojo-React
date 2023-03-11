import { configureStore } from "@reduxjs/toolkit";
import postsReducer from '../features/posts/postsSlice';
import usersReducer from '../features/users/usersSlice';
import commentReducer from '../features/comments/reducerComment';


export const store = configureStore({
    reducer: {
        posts: postsReducer,
        users: usersReducer,
        comment: commentReducer

    }
})
