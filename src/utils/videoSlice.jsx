import { createSlice } from "@reduxjs/toolkit";

const videoSlice = createSlice({
    name: 'video',
    initialState: {
        title: '',
        channelTitle: '',
    },
    reducers: {
        videoTitle: (state, action) => {
            state.title = action.payload.title;
        },

        videoChannelTitle: (state, action) => {
            state.title = action.payload.title;
        },

    }
})

export const { videoTitle, videoChannelTitle } = videoSlice.actions
export default videoSlice.reducer