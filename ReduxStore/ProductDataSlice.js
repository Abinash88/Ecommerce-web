
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    productDatas:[],
    status:'idle',
}

export const ProductSlice = createSlice({
    name:'Products',
    initialState,
    extraReducers:(builder) =>{
        builder.addCase(getProducts.pending, (state, action)=> {
            state.status = 'pending';
        })
        .addCase(getProducts.fulfilled, (state, action)=> {
            state.productDatas = action.payload;
            state.status = 'fulfilled';
        })
        .addCase(getProducts.rejected,(state, action)=> {
            state.status = 'rejected';
        })
    }
})

export default ProductSlice.reducer;

    // fetching products in the seller mode for seller details 
export const getProducts = createAsyncThunk('products/getProducts', async ()=> {
    try{
        const res = await fetch(`http://localhost:3000/api/GetProducts`,{
          method: 'GET',
          headers:{
            "Content-Type": "application/json"
          }
        })
        const data =await res.json();
        if(!data.success) return [];
        return data;
    }catch(err){
        return [];
    }
  });

