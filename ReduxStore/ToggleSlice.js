import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isToggle:true,
    isAccount:false,
    isCatagory:false,
};

const InitialToggle = createSlice({
    name:'login',
    initialState,
    reducers:{
         Togglein(state) {
            state.isToggle = !state.isToggle;
         },
         AccountIn(state,action) {
            if(action.payload === false) {
                state.isAccount = action.payload
            }else  {
                state.isAccount = !state.isAccount;
            }
         },
         OpenCatagory(state, action) {
            state.isCatagory = !state.isCatagory;
         }
    }
})

export const {Togglein, AccountIn, OpenCatagory} = InitialToggle.actions
export default InitialToggle.reducer;