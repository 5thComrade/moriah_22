import { createSlice } from "@reduxjs/toolkit";
import { toggleHamburgerButton } from "./actions";

const initialState = {
  openSideBar: false,
};

const appSlice = createSlice({
  name: "application",
  initialState,
  reducers: {},
  extraReducers: {
    [toggleHamburgerButton]: (state) => {
      state.openSideBar = !state.openSideBar;
    },
  },
});

export default appSlice.reducer;
