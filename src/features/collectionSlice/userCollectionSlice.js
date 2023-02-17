import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  usersCollections: [],
};

const userCollectionSlice = createSlice({
  name: "usersCollections",
  initialState,
  reducers: {
    addUserCollections: (state, { payload }) => {
      state.usersCollections = payload;
    },
  },
});

export const { addUserCollections } = userCollectionSlice.actions;
export const getUsersCollections = (state) => state.usersCollections.usersCollections;
export default userCollectionSlice.reducer;
