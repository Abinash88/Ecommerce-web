import { configureStore } from "@reduxjs/toolkit";
import InitialToggle from './ToggleSlice'
import updateSlice from "./updateSlice";
import LogOutSlice  from "./LogoutSlice";
import BuyersSlice from './FetchProductsSlice'
import UserSlice from "./UserSlice";
import ProductSlice from "./ProductDataSlice";
import countsSlice  from "./AddProductSlice";
import CartItemSlice  from "./CartItem";
import GetCartCount from "./CartTotalCount";
import WhislistSlice from "./AddToWhislist";
import CatagorySlice from "./CatagorySlice";
import GetWhislistSlice from "./GetWhislistProduct";

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
        CartCountItem:GetCartCount,
        whislist:WhislistSlice,
        catagory:CatagorySlice,
        whislistdata:GetWhislistSlice,
    },
})

export default store;