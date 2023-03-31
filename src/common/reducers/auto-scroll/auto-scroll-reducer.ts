import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { useRef } from "react";
import { IAutoScrollState } from "./auto-scroll-types";

const autoScrollReducer = createSlice({
  name: "autoScroll",
  initialState: {
    blogRef: useRef<HTMLDivElement | null>(null),
    experienceRef: useRef<HTMLDivElement | null>(null),
    aboutMeRef: useRef<HTMLDivElement | null>(null),
    myProjectsRef: useRef<HTMLDivElement | null>(null),
    wellcomeRef: useRef<HTMLDivElement | null>(null),
  },
  reducers: {
    goTo: (state, { payload }: PayloadAction<keyof IAutoScrollState>) => {
      // state[payload].current?.scrollIntoView({ behavior: "smooth" });
      // console.log(state[payload].current);
      console.log(payload);
    },
  },
});

export const { goTo } = autoScrollReducer.actions;
export default autoScrollReducer.reducer;
