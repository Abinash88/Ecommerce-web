import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";



const initialState = {
    user: [],
    status: null,
};

export const UserSlice = createSlice({
    name: "User",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(getUser.fulfilled, (state, action) => {
                state.user = action.payload;
                state.status = "idle";
            })
            .addCase(getUser.pending, (state, action) => {
                state.status = "loading";
            })
            .addCase(getUser.rejected, (state, action) => {
                state.status = "rejected";
            });
    },

});

export default UserSlice.reducer;


export const getUser = createAsyncThunk("User/getUser", async () => {
    try{
        const res = await axios.get("/api/ProfileData");
        const data = res.data;
        console.log(data);
        if(!data.success)return [];
        return data;
    }catch(err) {
        return [];
    }
});
