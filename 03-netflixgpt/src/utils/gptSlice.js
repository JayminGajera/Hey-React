import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name:"gpt",
    initialState:{
        showGptSearch: false,
        movieNames:null,
        movieResults:null,
    },
    reducers:{
        toggelGptSearhView : (state) => {
            state.showGptSearch = !state.showGptSearch;
        },
        addGptMovieResults:(state,action) => {
            const {movieNames,movieResults} = action.payload;
            state.movieNames = movieNames;
            state.movieResults = movieResults;

        }
    }
});

export const {toggelGptSearhView, addGptMovieResults} = gptSlice.actions;
export default gptSlice.reducer;