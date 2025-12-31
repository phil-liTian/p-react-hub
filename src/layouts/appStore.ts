import { createSlice } from "@reduxjs/toolkit";
// import type { PayloadAction } from "@reduxjs/toolkit";

interface InitialStateType {
  isMobile: boolean;
}

const initialState: InitialStateType = {
  isMobile: false,
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {},
  selectors: {
    getIsMobile: (app) => app.isMobile,
  },
});

export const { getIsMobile } = appSlice.selectors;
