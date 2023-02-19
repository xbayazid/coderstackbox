
import { configureStore } from '@reduxjs/toolkit';
import collectionsReducer from './collectionSlice/collectionSlice'
import usersCollectionsReducer from './collectionSlice/userCollectionSlice';
export const store = configureStore({
    reducer: {
        collections: collectionsReducer,
        usersCollections: usersCollectionsReducer
    }
})