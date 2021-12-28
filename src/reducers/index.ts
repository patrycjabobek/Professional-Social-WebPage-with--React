// spis reducerów

import { combineReducers } from 'redux';
import users, { IUsersReducer } from './usersReducer';
import photos, { IPhotosReducer } from './photosReducer';
import posts, { IPostsReducer } from './postsReducer';
import comments, { ICommentsReducer } from './commentsReducer';

// nasz globalny stan składa się z 1 reducera,
export default combineReducers({
    users,
    photos,
    posts,
    comments
})

// interface
export interface IState {
    users: IUsersReducer,
    photos: IPhotosReducer,
    posts: IPostsReducer,
    comments: ICommentsReducer
}