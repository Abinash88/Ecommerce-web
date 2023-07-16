import { TrashIcon, HeartIcon } from "@heroicons/react/24/outline";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const WhisListSingleItem = ({ item }) => {
  const [numbercount, setNumbercount] = useState(0);
  const { whislist } = useSelector(state => state.whislist)
  const { user } = useSelector(state => state.user)

 
    console.log(item.product, 'singleitemwhislist')

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
          <div onClick={() => SaveToWhislist(user?.user?._id, item?._id)} className="md:mr-10 sm:mr-0 mt-5">
              { whislist?.whislist?.acknowledged ?
              <button><HeartIcon className='h-7 ' /></button>
              :
              <button><Heart className='h-7 text-red-600' /></button>
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhisListSingleItem;
