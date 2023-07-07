import Headers from "@/components/Headers";
import React, {  useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CartSingleItem from "@/components/smallPice/cartSingleItem";
import { useRouter } from "next/router";
import  { getCartItem } from "@/ReduxStore/CartItem";

const Cart = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { cartItem } = useSelector((state) => state.cartItem);
  const [ carttotal, setCarttotal] = useState();
  const { user } = useSelector((state) => state.user);



  useEffect(() => {
    dispatch(getCartItem(user?.user._id));
  }, []);

  const AddingCartItem = async () => {
    try {
      const res = await fetch('/api/TotalCartPrice', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
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
      <div className={`flex md:flex-row flex-col-reverse space-y-5 items-center md:items-start  relative justify-start w-[100%] md:w-[90%] md:space-x-4 h-[78vh]  my-10 m-auto`}>
        {cartItem?.length > 0 ? (
          <>
            <div className="md:w-[70%] w-[95%] h-full  overflow-auto relative m-auto p-3 flex flex-col gap-[20px]">
              {cartItem?.map((item) => {
                return (
                  <CartSingleItem
                    key={item._id}
                    item={item}
                    cartItem={cartItem}
                  />
                );
              })}
            </div>
            <div className="md:w-[30%] w-[95%] bg-gray-100 p-4 h-[300px]">
              <h2 className="text-[22px] text-gray-600 font-semibold">
                Order Summery
              </h2>
              <div className="flex justify-between">
                <h6 className="text-gray-600 my-2 font-semibold">
                  SubTotal ({ cartItem.map((item) => item.items)?.reduce((accu, current) => {
                  return accu + current}, 0)})
                </h6>
                <h6 className="text-gray-600 my-2 font-semibold">
                  {/* {cartItem?.reduce((item, accu) => {
                    return (
                      (item?.price + accu?.price)
                    );
                  })} */}
                </h6>
              </div>
              <div className="">
                <button onClick={() => alert('Your checkout process is completed')} className='block text-center py-2 bg-red-500 w-full text-white font-semibold mt-5 hover:bg-red-600'>Procced To Checkout ({cartItem?.length})</button>
              </div>
            </div>
          </>
        ) : (
          <div className="w-full mt-10 h-full flex flex-col justify-center items-center">
            <h3 className="text-[20px] text-gray-500 font-semibold">
              No Item Found in Cart!
            </h3>
            <button
              className="font-semibold text-white px-6 py-3 bg-red-600   mt-5 hover:bg-red-700"
              onClick={() => router.push("/")}
            >
              Go Back
            </button>
          </div>
        )}
      </div>
    </div>
    
  );
};

export default Cart;
