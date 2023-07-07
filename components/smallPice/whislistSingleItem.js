import { TrashIcon, HeartIcon } from "@heroicons/react/24/outline";
import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { useDispatch } from "react-redux";

const whislistSingleItem = ({ item }) => {
  const dispatch = useDispatch();
  const [numbercount, setNumbercount] = useState(0);

 
    


  return (
    <div className="w-full flex md:h-[150px] h-auto md:overflow-hidden bg-gray-100">
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

export default whislistSingleItem;
