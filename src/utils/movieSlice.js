import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: "movies",
    initialState: {
        nowPlayingMovies: null,
        trailerVideo: null,
        popularMovies:null,
        topRated:null,
        upcoming:null,
    },
    reducers: {
        addNowPlayingMovies: (state,action) => {
            state.nowPlayingMovies = action.payload;
        },
        addTrailerVideo: (state,action) => {
            state.trailerVideo = action.payload;
        },
        addPopularMovies: (state,action) => {
            state.popularMovies = action.payload;
        },
        addTopRated: (state,action) => {
            state.topRated = action.payload;
        },
        addUpcoming: (state,action) => {
            state.upcoming = action.payload;
        },
    },
});

export const  {addNowPlayingMovies,addTrailerVideo,addPopularMovies,addTopRated,addUpcoming} = movieSlice.actions;
export default movieSlice.reducer;