import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    selects:false,
    status:'idle',
};

const updateSlice = createSlice({
    name:'update',
    initialState,
    extraReducers: (builder) =>{
       builder.addCase(updateGet.fulfilled, (state, action) => {
        state.selects = action.payload
        state.status = 'idle'
       })
       .addCase(updateGet.pending, (state, action) => {
        state.status = 'loading'
       })
       .addCase(updateGet.rejected, (state, action) => {
        state.status = 'rejected'
       })
    }
})


export default updateSlice.reducer;

export const updateGet = createAsyncThunk('update/updateGet', async(id) => {
    try{
        const res = await fetch(`http://localhost:3000/api/${id}`,{
            method:'PUT',

        })
        const data =await res.json();
        if(!data.success) console.log(data.message);
        return data.data;

    }catch(err) {
        console.log(err.message);
    }
})