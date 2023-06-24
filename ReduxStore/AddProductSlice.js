import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    counts:1,
};

export const countsSlice = createSlice({
    name: 'counts',
    initialState,
    reducers:{
        Increase(state, action) {
            state.counts++;
        },
        Decrease(state, action) {
            if(state.counts > 1) {
                state.counts--;
            }
        },
    }
})

export const {Increase, Decrease} = countsSlice.actions;
export default countsSlice.reducer;