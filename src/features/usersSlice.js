import { async } from "@firebase/util";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";




export const getUsers = createAsyncThunk('getUser', async () => {
    const response = await fetch(`https://coderstackbox-server-codersstackbox-gmailcom.vercel.app/users`, {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
        authorization: `Bearer ${localStorage.getItem('CodersStackBox')}`,
      },
    })
    const res = await response.json()
    const users = res.result;
    return users
  })

const userSlice = createSlice({
    name: 'users',
    initialState: {
        users: [],
        loading: false,
    },
    extraReducers: {
        [getUsers.pending]: (state, action) => {
            state.loading = true;
        },
        [getUsers.fulfilled]: (state, action) => {
            state.loading = false;
            state.users = action.payload;
        },
        [getUsers.rejected]: (state, action) => {
            state.loading = false;
        }
    }
})

export default userSlice.reducer;