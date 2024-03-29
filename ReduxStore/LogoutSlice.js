import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { useRouter } from "next/router";
import { toast } from "react-hot-toast";



const initialState = {
    logout:false,
    status : null,
    
}

export const LogOutSlice = createSlice({
    name: 'logout',
    initialState,
    extraReducers:(builder) => {
        builder.addCase(LogoutHandler.pending, (state, action) => {
            state.status = 'loading';
        })
        .addCase(LogoutHandler.fulfilled, (state, action) => {
            state.status = 'idle';
            state.logout = action.payload;
        })
        .addCase(LogoutHandler.rejected, (state, action) => {
            state.status  = 'rejected';
        })
    }
})


export default LogOutSlice.reducer;

export const LogoutHandler =createAsyncThunk('logout/LogoutHandler', async () => {
    try {

        const res = await axios.get('/api/auth/logout')
        const data = res.data;
        if (!data.message) console.log(data.message);
        toast.success(data.message);
        return data.success
    } catch (err) {
        console.log(err.message);
    }
})
