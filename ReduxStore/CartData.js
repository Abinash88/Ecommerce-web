
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartdatas:[],
    status:null,
}

export const CartDataSlice = createSlice({
    name:'cartdata',
    initialState,
    extraReducers:(builder) =>{
        builder.addCase(GetCartData.pending, (state, action)=> {
            state.status = 'pending';
        })
        .addCase(GetCartData.fulfilled, (state, action)=> {
            state.cartdatas = action.payload;
            state.status = 'fulfilled';
        })
        .addCase(GetCartData.rejected,(state, action)=> {
            state.status = 'rejected';
        })
    }
})

export default CartDataSlice.reducer;

    // fetching products in the seller mode for seller details 
export const GetCartData = createAsyncThunk('cartdata/GetCartData', async ()=> {
    try{
        const res = await fetch('http://localhost:3000/api/GetCartData',{
          method: 'GET',
          headers:{
            "Content-Type": "application/json",
          }
        })
        const data = await res.json();
        if(!data.success) return []
        return data.cartitem
      }catch(err) {
        return []
      }
  });

