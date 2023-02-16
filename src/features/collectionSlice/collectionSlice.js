import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  collections: [],
};

const collectionSlice = createSlice({
  name: "collections",
  initialState,
  reducers: {
    addCollections: (state, { payload }) => {
      state.collections = payload;
    },
  },
});

export const { addCollections } = collectionSlice.actions;
export const getAllCollections = (state) => state.collections.collections;
export default collectionSlice.reducer;
