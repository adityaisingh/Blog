import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: null,
  error: null,
  loading: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    signInstart: (state) => {
      state.loading = true;
      state.error = null;
    },
    signInsucess: (state, action) => {
      state.currentUser = action.payload;
      state.loading = false;
      state.error = action.payload;
    },
    signInFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    updatestart: (state) => {
      state.loading = true;
      state.error = null;
    },
    updateSucess: (state, action) => {
      state.currentUser = action.payload;
      state.loading = false;
      state.loading = false;
      state.error = null;
    },
    updateFailure: (state, action) => {
      state, (loading = false);
      state.error = action.payload;
    },
    deleteUserStart: (state) => {
      state, (loading = true);
      state.error = null;
    },
    deleteUserFailure: (state) => {
      state, (loading = false);
      state.error = action.payload;
    },
    deleteUserSuccess: (state) => {
      state.loading = true;
      state.error = null;
      state.currentUser = null;
    },
    signoutSuccess: (state) => {
      state.currentUser = null;
      state.error = null;
      state.loading = false;
    },
  },
});

export const {
  signInstart,
  signInsucess,
  signInFailure,
  updatestart,
  updateSuccess,
  updateFailure,
  deleteUserStart,
  deleteUserFailure,
  deleteUserSuccess,
  signoutSuccess,
} = userSlice.actions;

export default userSlice.reducer;
