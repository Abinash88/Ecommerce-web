import Headers from "@/components/Headers";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import  { getCartItem } from "@/ReduxStore/CartItem";
import CartBody from "@/components/smallPice/CartBody";
import PleaseLoginPage from "./PleaseLoginPage";

const Cart = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { cartItem } = useSelector((state) => state.cartItem);
  const [ carttotal, setCarttotal] = useState();
  const { user } = useSelector((state) => state.user);



  useEffect(() => {
    dispatch(getCartItem(user?.user?._id));
  }, []);

  const AddingCartItem = async () => {
    try {
      const res = await fetch('/api/TotalCartPrice', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json',
      id:user?.user?._id,
    }
      });
      const data = await res.json();
      if (!data.success) console.log(data.message)
      setCarttotal(data);
    } catch (err) {
      console.log(err.message)
    }
  }



  useEffect(() => {
    AddingCartItem();
  }, []);


  return (
    <div>
      <Headers />
        {user.success ?
          <CartBody cartItem={cartItem} carttotal={carttotal}/>
          : <PleaseLoginPage/>
        }
    </div>
    
  );
};

export default Cart;
