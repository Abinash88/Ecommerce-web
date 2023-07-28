import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    whislistdata:[],
    whislistStatus:null,
}

export const GetWhislistSlice = createSlice({
    name: 'whislistdata',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(GetWhislist.fulfilled, (state, action) => {
            state.whislistdata = action.payload;
            state.whislistStatus = 'idle';
        })
            .addCase(GetWhislist.pending, (state, action) => {
                state.whislistStatus = 'loading';
            })
            .addCase(GetWhislist.rejected, (state, action) => {
                state.whislistStatus = 'rejected';
            })
    }
})

export default GetWhislistSlice.reducer;


export const GetWhislist = createAsyncThunk('whislistdata/GetWhislist', async(ids) => {
    try {
        const res = await fetch('/api/FindWhislistItem',{
            method:'GET',
            headers:{
                'Content-Type':'application/json',
                userid:ids,
            }
        });
        const data = await res.json();
        if (!data.success) return console.log(data.message);
        return data;
    } catch (err) {
        console.log(err.message);
    }
})