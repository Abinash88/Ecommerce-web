import { configureStore } from "@reduxjs/toolkit";
import InitialToggle from './ToggleSlice'
import updateSlice from "./updateSlice";
import LogOutSlice  from "./LogoutSlice";
import BuyersSlice from './FetchProductsSlice'
import UserSlice from "./UserSlice";
import ProductSlice from "./ProductDataSlice";
import countsSlice  from "./AddProductSlice";
import CartItemSlice  from "./CartItem";

const store = configureStore({
    reducer:{
        user:UserSlice,
        toggle:InitialToggle,
        productDatas:ProductSlice,
        update:updateSlice,
        logout:LogOutSlice,
        buyersProduct:BuyersSlice,
        counts:countsSlice,
        cartItem:CartItemSlice,
    },
})

export default store;