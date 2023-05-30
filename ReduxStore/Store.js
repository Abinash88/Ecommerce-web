import { configureStore } from "@reduxjs/toolkit";
import UserSlice from "./UserSlice";
import InitialToggle from './ToggleSlice'

const store = configureStore({
    reducer:{
        user:UserSlice,
        toggle:InitialToggle
    }
})

export default store;