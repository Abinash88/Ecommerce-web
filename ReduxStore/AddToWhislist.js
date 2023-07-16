
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-hot-toast";

const initialState = {
    whislist:[],
    status:'idle',
}

export const WhislistSlice = createSlice({
    name: 'whislist',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(FetchWhislist.fulfilled, (state, action) => {
            state.whislist = action.payload;
            state.status = 'idle';
        })
            .addCase(FetchWhislist.pending, (state, action) => {
                state.status = 'loading';
            })
            .addCase(FetchWhislist.rejected, (state, action) => {
                state.status = 'rejected';
            })
    }
})

export default WhislistSlice.reducer;


export const FetchWhislist = createAsyncThunk('whislist/FetchWhislist', async(ids) => {
    console.log(ids)
    try {
        const res = await fetch('/api/GetWhislistProduct',{
            method:'POST',
            headers:{
                'Content-Type':'application/json',
                userId:ids.user,
                productId:ids.product
            }
        });
        const data = await res.json();
        if (!data.success) return console.log(data.success);
        toast.success(data.message);
        return data;
    } catch (err) {
        console.log(err.message);
    }
})