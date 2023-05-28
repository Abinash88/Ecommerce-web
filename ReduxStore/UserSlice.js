import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: [],
    status: 'idle'
}

const UserSlice = createSlice({
    name: 'User',
    initialState,
    extraReducers: (builder) => {
        builder
        .addCase(getUser.fulfilled, (state, action) => {
            state.user = action.payload;
            state.status = 'idle'
        })
        .addCase(getUser.pending, (state, action) => {
            state.status = 'loading';
        })
        .addCase(getUser.rejected, (state, action) => {
            state.status = 'rejected'
        })
    }
})

export default UserSlice.reducer;

export const getUser = createAsyncThunk('User/getUser', async () => {
    const res = await fetch('api/auth/ProfileData');
    const data = await res.json();
    return data;

})