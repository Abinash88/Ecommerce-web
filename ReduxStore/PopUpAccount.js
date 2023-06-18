import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    change:false,
}

export const AccountPopUp = createSlice({
    name: 'popup',
    initialState,
    reducers:{
        PupUpAccount(state, action) {
            state.change = !state.change
        }
    }
})

export const {PupUpAccount} = AccountPopUp.actions;
export default AccountPopUp.reducer;