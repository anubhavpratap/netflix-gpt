import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: "movies",
    initialState: {
        nowPlayingMovies: null,
        trailerVideo: null,
        popularMovies:null,
        topRated:null,
        upcoming:null,
        current:null,
        watchlist: [],
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
        addCurrent: (state,action) => {
            state.current = action.payload;
        },
        addWatchlist: (state,action) => {
            const exists = state.watchlist.find(movie => movie.id === action.payload.id);
            if (!exists) {
                state.watchlist.push(action.payload);
            }
        },
        removeFromWatchlist: (state, action) => {
            state.watchlist = state.watchlist.filter((m) => m.id !== action.payload.id);
        },
        clearWatchlist: (state) => {
            state.watchlist = [];
        },
          
    },
});

export const  {addNowPlayingMovies,addTrailerVideo,addPopularMovies,addTopRated,addUpcoming,addCurrent,addWatchlist,removeFromWatchlist,clearWatchlist} = movieSlice.actions;
export default movieSlice.reducer;