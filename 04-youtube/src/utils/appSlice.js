import { createSlice } from "@reduxjs/toolkit";


const appSlice = createSlice({
    name:"app",
    initialState:{
        isMenuOpen: true,
        isDark:true
    },
    reducers:{
        toggelMenu:(state) => {
            state.isMenuOpen = !state.isMenuOpen;
        },
        closeMenu:(state) => {
            state.isMenuOpen = false;
        },
        handleDark:(state) => {
            state.isDark = !state.isDark;
        }
    }
});

export const {toggelMenu, closeMenu,handleDark} = appSlice.actions;
export default appSlice.reducer;