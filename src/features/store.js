
import { configureStore } from '@reduxjs/toolkit';
import collectionsReducer from './collectionSlice/collectionSlice'
export const store = configureStore({
    reducer: {
        collections: collectionsReducer
    }
})