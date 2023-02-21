
import { configureStore } from '@reduxjs/toolkit';
import collectionsReducer from './collectionSlice/collectionSlice'
import usersCollectionsReducer from './collectionSlice/userCollectionSlice';
import UsersReducer from './usersSlice';
import UserCollectionsReducer from './userCollections';

export const store = configureStore({
    reducer: {
        collections: collectionsReducer,
        usersCollections: usersCollectionsReducer,
        users: UsersReducer,
        userCollections: UserCollectionsReducer
    }
})