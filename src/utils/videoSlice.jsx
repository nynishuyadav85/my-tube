import { createSlice } from "@reduxjs/toolkit";

const videoSlice = createSlice({
    name: 'video',
    initialState: {
        title: '',
    },
    reducers: {
        videoTitle: (state, action) => {
            state.title = action.payload.title;
        },
    }
})

export const { videoTitle, videoChannelName } = videoSlice.actions
export default videoSlice.reducer