// spis reducerów

import { combineReducers } from 'redux';
import users, { IUsersReducer } from './usersReducer';
import photos, { IPhotosReducer } from './photosReducer';

// nasz globalny stan składa się z 1 reducera,
export default combineReducers({
    users,
    photos
})

// interface
export interface IState {
    users: IUsersReducer,
    photos: IPhotosReducer
}