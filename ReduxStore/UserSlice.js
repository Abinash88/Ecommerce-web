import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: [],
    status: "idle",
    logout:'idle'
};

const UserSlice = createSlice({
    name: "User",
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(getUser.fulfilled, (state, action) => {
                state.user = action.payload;
                state.status = "idle";
            })
            .addCase(getUser.pending, (state, action) => {
                state.status = "loading";
            })
            .addCase(getUser.rejected, (state, action) => {
                state.status = "rejected";
            });
    },
    extraReducers: (builder) => {
        builder
            .addCase(getUser.fulfilled, (state, action) => {
                state.logout = "idle";
            })
            .addCase(getUser.pending, (state, action) => {
                state.logout = "loading";
            })
            .addCase(getUser.rejected, (state, action) => {
                state.logout = "rejected";
            });
    },
});

export default UserSlice.reducer;

export const getUser = createAsyncThunk("User/getUser", async () => {
    const res = await fetch("api/auth/ProfileData");
    const data = await res.json();
    return data;
});

export const SetLogout = createAsyncThunk(
    "User/SetLogout",
    async () => {
        const res = await axios.get('/api/auth/logout')
        const data = res.json();
        if (!data.success) return toast.error(data.message);
        toast.success(data.message);
        router.push('/Login');
        console.log(data, 'slicee')
    }
);
