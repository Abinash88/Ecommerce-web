import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isToggle:true,
};

const InitialToggle = createSlice({
    name:'login',
    initialState,
    reducers:{
         Togglein(state) {
            state.isToggle = !state.isToggle;
         }
    }
})

export const {Togglein} = InitialToggle.actions
export default InitialToggle.reducer;