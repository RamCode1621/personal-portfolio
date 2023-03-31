import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./common/reducers/theme/theme-reducer";
import visiblePageReducer from "./common/reducers/visible-page/visible-page-reducer";
import timelineReducer from "./components/Timeline/timeline-reducer";
import youtubeReducer from "./common/reducers/youtube/youtube-reducer";
// import autoScrollReducer from "./common/reducers/auto-scroll/auto-scroll-reducer";

const store = configureStore({
  reducer: {
    theme: themeReducer,
    timeline: timelineReducer,
    visibilePage: visiblePageReducer,
    youtube: youtubeReducer,
    // autoScroll: autoScrollReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
