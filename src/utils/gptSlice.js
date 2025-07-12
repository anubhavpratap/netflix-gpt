import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name: "gpt",
    initialState: {
        showGptSearch: false,
        movieResults: null,
        movieNames: null,
    },
    reducers: {
        toggleGptSearchView: (state) => {
            state.showGptSearch = !state.showGptSearch;
        },
        addGptMovieResult: (state, action) => {
            const { movieNames, movieResults } = action.payload;
            state.movieNames = movieNames;
            state.movieResults = movieResults;
        },
        unsetGptSearch: (state) => {
            state.showGptSearch = false;
        }
    },
});

export const {toggleGptSearchView,addGptMovieResult,unsetGptSearch} = gptSlice.actions;

export default gptSlice.reducer;