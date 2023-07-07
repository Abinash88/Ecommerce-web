
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    whislist:[],
    status:'idle',
}

const BuyersSlice = createSlice({
    name: 'whislist',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(FetchBuyersProduct.fulfilled, (state, action) => {
            state.whislist = action.payload;
            state.status = 'idle';
        })
            .addCase(FetchBuyersProduct.pending, (state, action) => {
                state.status = 'loading';
            })
            .addCase(FetchBuyersProduct.rejected, (state, action) => {
                state.status = 'rejected';
            })
    }
})

export default BuyersSlice.reducer;


export const FetchWhislist = createAsyncThunk('whislist/FetchWhislist', async () => {
    try {
        const res = await axios.get('/api/GetBuyersProduct');
        const data = res.data
        if (!data.success) return [];
        return data.product;
    } catch (err) {
        return [];
    }
})