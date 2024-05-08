import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: null,
  loading: false,
  error: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    signinStart: (state) => {
      state.loading = true;
    },
    signinSuccess: (state, action) => {
      state.currentUser = action.payload;
      state.loading = false;
      state.error = false;
    },
    signinError: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
    updateuserstart: (state) => {
      state.loading = true;
    },
    updateUsersuccess: (state, action) => {
      state.currentUser = action.payload;
      state.loading = false;
      state.error = false;
    },
    updateuserfail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  signinStart,
  signinSuccess,
  signinError,
  updateUsersuccess,
  updateuserfail,
  updateuserstart,
} = userSlice.actions;

export default userSlice.reducer;
