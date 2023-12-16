import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name:"gpt",
    initialState:{
        showGptSearch: false,
    },
    reducers:{
        toggelGptSearhView : (state) => {
            state.showGptSearch = !state.showGptSearch;
        }
    }
});

export const {toggelGptSearhView} = gptSlice.actions;
export default gptSlice.reducer;