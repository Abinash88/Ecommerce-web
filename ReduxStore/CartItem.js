
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartItem:[],
    status:null,
}

export const CartItemSlice = createSlice({
    name:'cartItem',
    initialState,
    extraReducers:(builder) =>{
        builder.addCase(getCartItem.pending, (state, action)=> {
            state.status = 'pending';
        })
        .addCase(getCartItem.fulfilled, (state, action)=> {
            state.cartItem = action.payload;
            state.status = 'fulfilled';
        })
        .addCase(getCartItem.rejected,(state, action)=> {
            state.status = 'rejected';
        })
    }
})

export default CartItemSlice.reducer;

    // fetching products in seller mode in cart for seleccted cart items
export const getCartItem = createAsyncThunk('cartItem/getCartItem', async (userid)=> {
    try {
      const res = await fetch("/api/GetAddCart", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          userid
        },
      });

      const data = await res.json();
      if (!data.success) return [];
      const getdata = data.product;
      return getdata;
    } catch (err) {
        return [];
    }
  })
