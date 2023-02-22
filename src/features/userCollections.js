import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userCollections: [],
};

const userCollectionsSlice = createSlice({
  name: "user-collections",
  initialState,
  reducers: {
    addUserCollections: (state, { payload }) => {
      state.userCollections = payload;
    },
  },
});

export const { addUserCollections } = userCollectionsSlice.actions;
export const getAllUserCollections = (state) => state.userCollections.userCollections;
// console.log(getAllUserCollections);
export default userCollectionsSlice.reducer;
