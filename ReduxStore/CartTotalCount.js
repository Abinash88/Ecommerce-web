
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    CartCountItem:[],
    status:'idle',
}

export const GetCartCount = createSlice({
    name:'CartCountItem',
    initialState,
    extraReducers:(builder) =>{
        builder.addCase(GetCartTotalcount.pending, (state, action)=> {
            state.status = 'pending';
        })
        .addCase(GetCartTotalcount.fulfilled, (state, action)=> {
            state.CartCountItem = action.payload;
            state.status = 'fulfilled';
        })
        .addCase(GetCartTotalcount.rejected,(state, action)=> {
            state.status = 'rejected';
        })
    }
})

export default GetCartCount.reducer;

    // fetching products in the seller mode for seller details 
export const GetCartTotalcount = createAsyncThunk('CartCountItem/GetCartTotalcount', async (id)=> {
    try{
        const res = await fetch(`/api/CartTotalCountItem`,{
          method: 'GET',
          headers:{
            "Content-Type": "application/json",
            id
          }
        })
        const data = await res.json();
      if (!data.success) return [];
      return ([data.CartItemCount]);
    }catch(err){
        return [];
    }
  });

