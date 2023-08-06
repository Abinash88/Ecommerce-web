import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isToggle:true,
    isAccount:false,
    isCagatory:false,
};

export const InitialToggle = createSlice({
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
            state.isCagatory = !state.isCagatory
         }
        
    }
})

export const {Togglein, AccountIn, OpenCatagory} = InitialToggle.actions
export default InitialToggle.reducer;