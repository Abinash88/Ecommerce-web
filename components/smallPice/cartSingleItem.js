import { getCartItem } from "@/ReduxStore/CartItem";
import { GetCartTotalcount } from "@/ReduxStore/CartTotalCount";
import { TrashIcon, HeartIcon } from "@heroicons/react/24/outline";
import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";

const cartSingleItem = ({ item, cartItem }) => {
  const dispatch = useDispatch();
  const [numbercount, setNumbercount] = useState(0);
  const { user } = useSelector((state) => state.user);

  // Delete cart item from cart
  const deleteCartData = async (id) => {
    try {
      const res = await fetch("/api/DeleteCartItem", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          id,
        },
      });

      
      const data = await res.json();
      if (!data.success) return toast.error(data.message);
      toast.success(data.message);
      dispatch(getCartItem(user?.user?._id));
      dispatch(GetCartTotalcount(user?.user?._id));
    } catch (err) {
      console.log(err.message);
    }
  };

  // get the each cart items count number
  const getCartEachCountItem = async (id) => {
    try {
      const res = await fetch(`/api/CartEachItem/${id}`, {
        method: "GET",
        headers: { "Content-Type": "application/json",
        id:user.user._id
       },
       
      });

      const data = await res.json();
      if (!data.success) console.log(data.message);
      setNumbercount(data?.counts[0]?.items);
    } catch (err) {
      console.log(err.message);
    }
  };

  // adding the cart item count or increasing the number or product
  const AddItem = async (id) => {
    try {
      const res = await fetch("/api/AddItem", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          id,
        },
      });
      const data = await res.json();
      if (!data.success) console.log(data.message);
      getCartEachCountItem(item._id);
      dispatch(GetCartTotalcount(user?.user?._id));
    } catch (err) {
      console.log(err.message);
    }
  };
  // removing the cart item count or decreasing the number or product
  const LessItem = async (id) => {
    try {
      const res = await fetch("/api/LessItem", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          id,
        },
      });
      const data = await res.json();
      if (!data.success) console.log(data.message);
      getCartEachCountItem(item._id);
      dispatch(GetCartTotalcount(user?.user?._id));
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {}, []);

  useEffect(() => {
    getCartEachCountItem(item._id);
  }, []);

  return (
    <div className="w-full flex md:h-[150px] h-auto md:overflow-hidden border-b hover:bg-gray-50">
      <div className="w-[150px] h-full">
        <img className="h-full w-full" src={item?.image?.url} alt="" />
      </div>
      <div className="flex items-center md:flex-row flex-col ">
        <div className="w-[96%] md:w-[40%] mx-5 my-4 flex flex-col items-start space-y-3">
          <h2 className="text-gray-600 font-semibold text-[14px] md:text-[15px] ">
            {item?.name}
          </h2>
          <h5 className="text-gray-500 font-semibold text-[14px] text-left">
            {item?.country}
          </h5>
        </div>

        <div className="flex-1 flex flex-row md:flex-col justify-between w-[96%] items-center md:justify-center  md:space-y-4">
          <h5 className="text-red-500 text-[14px] md:text-[18px]">
            {" "}
            Rs.{item?.price}
          </h5>
          <div className="flex pb-2 md:pb-0 justify-center space-x-3">
            <HeartIcon className="h-5 cursor-pointer" />
            <TrashIcon
              onClick={() => deleteCartData(item?._id)}
              className="h-5 cursor-pointer text-red-600"
            />
          </div>
        </div>
      </div>

      <div className="flex-1 flex md:flex-row flex-col  justify-center items-center">
        <button
          onClick={() => LessItem(item._id)}
          className="text-[25px] text-white hover:bg-gray-500 w-[30px] h-[30px] rounded-sm flex items-center justify-center mx-3 bg-gray-400"
        >
          -
        </button>
        <span>{numbercount ? numbercount : 0}</span>
        <button
          onClick={() => AddItem(item._id)}
          className="text-[25px] text-white hover:bg-gray-500 w-[30px] h-[30px] rounded-sm flex items-center justify-center mx-3  bg-gray-400"
        >
          +
        </button>
      </div>
    </div>
  );
};

export default cartSingleItem;
