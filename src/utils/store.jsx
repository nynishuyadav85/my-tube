import { configureStore } from "@reduxjs/toolkit";
import appSlice from './appSlice'
import searchSlice from './searchSlice'
import videoSlice from "./videoSlice";

const store = configureStore({
    reducer: {
        app: appSlice,
        search: searchSlice,
        videoTitle: videoSlice,
    }
})

export default store;